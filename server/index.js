const express = require('express'); //This is ES5 format

const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router'); //Similar to IMPORT
const mongoose = require('mongoose');

//DB Setup. The below command creates a new DB names auth
mongoose.connect('mongodb://localhost:auth/auth'); 

//App Setup
app.use(morgan('combined')); //A logging framework. Logs a request for debugging
app.use(bodyParser.json({type: '*/*'})); //Parses incoming requests, into JSON
//Both of these are middleware. Incoming request is passed through these first.
//Nodemon watches our project directory for changes. If there are changes, it
//updates the server automatically

//Server Setup
router(app); //Refer to router.js


//Define a port. If there is a port defined use that, otherwise use 3090
const port = process.env.PORT || 3090;
const server = http.createServer(app);
//Create a HTTP server that knows how to receive requests, and then forward to express.

server.listen(port);
console.log('Server listening on:', port);
