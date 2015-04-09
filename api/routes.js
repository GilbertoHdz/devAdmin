'use strict';

var errors = require('./component/errors');

module.exports = function(app) {
  // Insert routes below
  app.use('/', require('./index'));
  app.use('/customers', require('./customer'));
  app.use('/users', require('./user'));

 
  
  // All undefined asset or api routes should return a 404
  //app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  // .get(errors[404]);

  // All other routes should redirect to the index.html
  console.log(app.get('appPath'));
  app.route('*')
   .get(function(req, res) {
     res.sendfile('./public/index.html');
   });
};