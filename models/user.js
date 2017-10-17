//local definition of what a user is. THIS IS WHAT IT SHOULD LOOK LIKE!

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Blueprint for layout
const bcrypt = require('bcrypt-nodejs'); //For encryption

//Define model
const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true}, //This is the model; make sure this is unique!
    password: String
});

//On Save Hook, encrypt password
//Before saving a model, run this function
userSchema.pre('save', function(next) {
    const user = this; //Getting access to user model

    //generate a salt, then run callback
    bcrypt.genSalt(10, function(err, salt) {
        if (err) {return next(err); }

        //hash(encrypt) our password using the salt
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {return next(err); }

            //overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

//Create the model class
const ModelClass = mongoose.model('user', userSchema); //Loads the schema into mongoose

//Export the model

module.exports = ModelClass; //Export to use elsewhere