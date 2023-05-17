const express = require('express');
const dotenv = require('dotenv');
const app = express();
app.get('/', function(req, res)
{
    res.send('Hello World');
})

//const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
console.log(`Your port is ${port}`);

const livreRoute = require('./routes/livre.route');
const docRoute = require('./routes/swagger.route');

const serverJson = express();
serverJson.use(express.json());
serverJson.set('json spaces', 2);

serverJson.use('/api/v1', docRoute);
serverJson.use('/api/v1/livre', livreRoute);













var server = app.listen( port, function (){
    var host = server.address().address
    var portServeur = server.address().port 
    console.log("exemple app listening at http://%s:%s", host, portServeur)
})