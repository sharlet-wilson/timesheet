// Register babel
require('babel-register');
var keystone = require('keystone');

// Start server.
keystone.init({
  
  'name': 'Timesheet',
  
  'favicon': 'public/favicon.ico',
  'less': 'public',
  'static': ['public'],
  
  'views': 'templates/views',
  'view engine': 'ejs',
  
  'auto update': true,
  'mongo': 'mongodb://localhost/timesheet',
  
  'session': true,
  'auth': true,
  'user model': 'User',
  'cookie secret': 'a secret'
  
});
 
require('./models');
 
keystone.set('routes', require('./routes'));
 
keystone.start();
