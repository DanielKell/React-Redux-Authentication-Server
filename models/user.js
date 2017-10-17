//local definition of what a user is. THIS IS WHAT IT SHOULD LOOK LIKE!

const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Blueprint for layout

//Define model
const userSchema = new Schema({
    email: {type: String, unique: true, lowercase: true}, //This is the model; make sure this is unique!
    password: String
});

//Create the model class
const ModelClass = mongoose.model('user', userSchema); //Loads the schema into mongoose

//Export the model

module.exports = ModelClass; //Export to use elsewhere