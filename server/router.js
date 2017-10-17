const Authentication = require('../controllers/authentication.js');

module.exports = function(app) {
    app.post('/signup', Authentication.signup);
} //Run authentication.signup function when something is posted to /signup