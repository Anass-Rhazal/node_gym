var express = require('express');
var router = express.Router();


var userService=require('../Service/userService.js');

router.get('/', function(req, res){

   userService.getAll(function (results){
       	res.json(results);

   });
});
router.post('/', function(req, res){
    res.json({message: "POST route on things."});
});

//export this router to use in our index.js
module.exports = router;