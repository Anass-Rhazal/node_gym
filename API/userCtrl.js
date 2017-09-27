var express = require('express');
// var app = express();
var router = express.Router();

var userSer=require('../Service/userService.js');

var  userService=new userSer();

router.get('/', function(req, res){

   userService.getAll(function (results){
       	res.json(results);

   });
});


router.get('/:id', function(req, res){

   userService.getOne(req.params.id,function (results){
       	res.json(results);

   });
});


router.post('/', function(req, res){
	// console.log(req.body);
    userService.add(req.body,function (results){
    	
       	res.json(results);

   });
});


router.put('/:id', function(req, res){
	
    userService.update(req.params.id,req.body,function(results){
    	 	res.json(results);
    });
});


router.delete('/:id', function(req, res){
	
    userService.delete(req.params.id);
});

//export this router to use in our index.js
module.exports = router;