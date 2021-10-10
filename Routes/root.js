var express = require('express');
var router = express.Router();



//---------------------------------------------------------------Endpoints/Routers


router.get('/',function(req,res){
    res.send('root');
});



//------------------------------------------------------------------------endpoints/routers

module.exports = router;