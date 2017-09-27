var express = require('express');


var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



var db = require('./Config/db.js');

var userCtrl = require('./API/userCtrl.js');

//both index.js and user.js should be in same directory
app.use('/user', userCtrl);

app.listen(9999);