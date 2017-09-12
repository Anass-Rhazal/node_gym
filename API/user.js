var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.json({message: "GET route on things."});
});
router.post('/', function(req, res){
    res.json({message: "POST route on things."});
});

//export this router to use in our index.js
module.exports = router;