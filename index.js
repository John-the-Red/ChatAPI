/*Restful api. Will reach into our info and present it to the user*/
//import dependencies
var express = require('express');
var app = express();
var apiroutes = require('./Routes/api');
var rootRoutes= require('./Routes/root');
var morgan = require('morgan');
// var bodyParser = require('body-parser');

//setup app (server/middleware) Sits in the chain of executions
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(morgan('combined'));
//add some endpoints


app.use('/api',apiroutes);
app.use('/', rootRoutes);

//REST - Representational State Transfer
//serve out our app
var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;

console.log("Example app listening on ",host, port);
});

//middleware
//function logAccess(req,res, next){
//    console.log(req.method, req.originalUrl);
//    next();
//}

//app.use(logAccess);
