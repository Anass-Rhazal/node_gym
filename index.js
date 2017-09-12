var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var user = require('./API/user.js');

//both index.js and user.js should be in same directory
app.use('/user', user);

app.listen(3000);