//dependancies
var express = require('express');
var router = express.Router();
var fs = require('fs');



//---------------------------------------------------------------Endpoints/Routers




//base route localhost:3000
//get all of a resource
router.get('/',function(req,res){
    try{
        var rawdata = fs.readFileSync('data.json'); //<buffer <hex code> //asynconise: continues running / syncronise: Halts and waits for input
        var students = JSON.parse(rawdata);
    //fs/promises are non standard uses to start/stop code
        console.log(students);
    
    
    
        res.status(200).json({message: students});
    } catch (err){
        res.status(500).json({message: err.message});
    }
    
});
//create an object
router.post('/', function(req,res){
    try{
        //open the file
        console.log("Posted Object is: ", req.body);
        const rawdata = fs.readFileSync('data.json');
        //decode the file(parse) se we can use it
        var students = JSON.parse(rawdata);
        //add data, but controlled
        var rawbody = req.body;

        var newObj = 
        {
            name: null,
            age: null,
            currentGame: null
        };
        if(rawbody.name != null)
        {
        newObj.name = rawbody.name;
        };
        if(rawbody.age != null)
        {
            newObj.age = rawbody.age;
        };
        if(rawbody.currentGame != null)
        {
            newObj.currentGame = rawbody.currentGame;
        };
        
        //add data, but controlled

        newObj._id = students.length;
        //get the actual index       
        students.push(newObj);
        //save(write) the data back to file
        const data = fs.writeFileSync('data.json', JSON.stringify(students));

        //return the data back to user
        res.status(201).json(newObj);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.patch('/:id', function(req,res){
    try{
        //open the file
        console.log("Object being patched is: ",req.params.id, req.body);
        const rawdata = fs.readFileSync('data.json');
        //decode the file(parse) se we can use it
        var students = JSON.parse(rawdata);
        var id = req.params.id;
        //add data, but controlled
        var rawbody = req.body;

        if(rawbody.name != null)
        {
        students[id].name = rawbody.name;
        };
        if(rawbody.age != null)
        {
            students[id].age = rawbody.age;
        };
        if(rawbody.currentGame != null)
        {
            students[id].currentGame = rawbody.currentGame;
        };
        
        //add data, but controlled

        students[id]._id = students.length;
        //save(write) the data back to file
        const data = fs.writeFileSync('data.json', JSON.stringify(students));

        //return the data back to user
        res.status(200).json(students[id]);
    } catch (err){
        res.status(500).json({message: err.message});
    }
});
router.delete('/:id', function(req,res){
    //storing id
    var id = req.params.id
    //open the file
    var rawdata = fs.readFileSync('data.json'); 
        var students = JSON.parse(rawdata);
        //delete id/comfirm
    if(students.length > id) {
        students.splice(id,1);
         //write back to file   
        const data = fs.writeFileSync('data.json', JSON.stringify(students));

        res.status(200).json({message:"ok"});
        
    }
    else
    {
        res.status(500).json({message: "An error occurred"});
    }
    //if no item found throw error message
    
})
//get - retrieve an object
//post - creating an object
//patch/put - updating an object
//delete - delete an object
//git pull, git push





//------------------------------------------------------------------------endpoints/routers

//this folder is a module. It needs to be exported to index so it needs to be equal to the router to do so

module.exports = router;