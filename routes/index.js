import keystone from 'keystone';
import passport from 'passport';
let middleware = require('./middleware');
let importRoutes = keystone.importer(__dirname);
 
// Common Middleware
keystone.pre('routes', middleware.initErrorHandlers);
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);
 
// Handle 404 errors
keystone.set('404', (req, res, next) => {
    res.notfound();
});
 
// Handle other errors
keystone.set('500', (err, req, res, next) => {
    var title, message;
    if (err instanceof Error) {
        message = err.message;
        err = err.stack;
    }   
    res.err(err, title, message);
});
 
// Load Routes
var routes = {
    views: importRoutes('./views')
};
 
// Bind Routes
exports = module.exports = (app) => {
    require('../routes/config/passport')(passport);
    app.use(passport.initialize());
    app.use(passport.session());
    require('../routes/views/session')(app, passport);
    //app.get('/', routes.views.index);
    
}