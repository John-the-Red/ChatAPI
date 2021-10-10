var express = require('express');
var app = express();
var apiroutes = require('./Routes/api');
var rootRoutes= require('./Routes/root');
var morgan = require('morgan');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(morgan('combined'));
app.use('/api',apiroutes);
app.use('/', rootRoutes);

var server = app.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;

console.log("Example app listening on ",host, port);
});

