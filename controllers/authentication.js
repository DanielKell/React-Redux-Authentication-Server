const User = require('../models/user');

exports.signup = function(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({error: "You must submit email/password"});
    }

    //See if a user with the given email exists
    User.findOne({email: email}, function(err, existingUser) {
        if (err) {return next(err); }

            //If a user with email does exist, return error
        if (existingUser) {
            return res.status(422).send({error: 'Email in use'});
        }
        
        //If user is new, create and save user record.
        const user = new User({
            email: email,
            password: password
        });

        user.save(function(err) {
            if (err) {return next(err); }
        });
        //Respond to request with user data
        res.json(user);
        });

}

//Goal: Read in a user if one is passed, check if account already exists, if it doesn't, save it