var mongoose = require('mongoose');
var express = require('express');
var cors = require('cors');
var config = require('./db/DB');
const employRoute = require('./routes/employee.route');
var bodyParser = require('body-parser');
var app = express();
//////////////////// DB Conection
// use mongoose with native Node promise
mongoose.Promise = global.Promise;
// create DB connection 
mongoose.connect(config.DB,{useNewUrlParser:true})
.then(() => console.log('DB Connection success!'))
.catch((err)=>console.log(err));

app.use(bodyParser.json());
app.use(cors());
// http://localhost:3000/employee
app.use('/employee' ,employRoute);
let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listining to port' + port);    
});
