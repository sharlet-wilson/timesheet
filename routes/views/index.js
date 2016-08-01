import keystone from 'keystone';

exports = module.exports = (req, res) => {
    
    var view = new keystone.View(req, res);
    
    view.render('index');
    
}