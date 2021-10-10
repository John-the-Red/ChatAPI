//dependancies
var express = require('express');
var router = express.Router();



//---------------------------------------------------------------Endpoints/Routers




//base route localhost:3000
router.get('/',function(req,res){
    res.send('root');
});
//get - retrieve an object
//post - creating an object
//patch/put - updating an object
//delete - delete an object




//------------------------------------------------------------------------endpoints/routers

//this folder is a module. It needs to be exported to index so it needs to be equal to the router to do so

module.exports = router;