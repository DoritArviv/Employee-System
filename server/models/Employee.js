const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
    empId: {
        type : Number
    },
    empName: {
        type : String
    },
    empFamily: {
        type : String
    },
    empEmail :{
        type : String
    },
    empAddress: {
        type : String
    }},
    {
        collation :'tblEmployee'
    });

    module.exports = mongoose.model('Employee',Employee);
