
//modules 

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
//var morgan = require('morgan');
var app = express();
var routes = express.Router();

var main = require('./routes/mainrouter.js');

// database connection
var mongoose =require('mongoose');
var db=mongoose.connect('localhost:27017/manage');

//use for routing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api/auth', main);





app.get('/',function(req, res) {
 res.send("hello All ")	;
 }); 

//app.use(express.static(__dirname + "/client/main.html"));

app.listen(3000);
console.log('Server running port 3000');