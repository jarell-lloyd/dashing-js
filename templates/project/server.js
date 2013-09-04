var dashing = require('dashing-js').Dashing();

// Set your auth token here
//dashing.auth_token = 'YOUR_AUTH_TOKEN';

// Set basic auth username here
//dashing.username = 'admin';

// Set basic auth password here
//dashing.password = 'admin';

/*
dashing.authenticateUser = function(username, password, callback) {
  // Put any authentication code you want in here.
  // This method is run before accessing any resource.
  // callback(true);
}
*/

// Set your default dashboard here
//dashing.default_dashboard = 'mydashboard';

dashing.start();
