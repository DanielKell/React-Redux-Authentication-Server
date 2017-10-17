module.exports = function(app) {
    app.get('/', function(req, res, next) { //On app, we have a GET request. '/' is the first route we want to go to.

    res.send(['waterbottle', 'phone', 'paper']);

    });
}