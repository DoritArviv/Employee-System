// write the CRUD operations 
const express = require('express');
const employRoute = express.Router();
// add student model schema
const Employee = require('../models/Employee');

//POST - add new employee
employRoute.route('/add-employee').post((req, res)=>{
    let newEmploy=  new Employee(req.body); 
    newEmploy.save().then(emp=>{
        console.log(emp.empId);
        res.status(200).json({'employee': 'added successfuly'});
        }).catch(err => {
            console.log(err);
            res.status(400).send('Unable to add!');
        });
});

//GET - show employees list
employRoute.route('/').get((req, res)=>{
    Employee.find((err, emp)=>{
        if(err)
        console.log(err);
        else{
            res.json(emp)
        }     
    });
});

//GET - delete user by id
employRoute.route('/delete/:id').get((req, res)=>{
    Employee.findByIdAndDelete({_id:req.params.id},(err,employee)=>{
        if(err) res.json(err)
        else {
            res.json('Employee deleted successfuly!')
            console.log('Delelte'+" "+ employee.empId); 
        }
    });
});
//GET - edit the user by id
employRoute.route('/edit/:id').get((req, res)=>{
    let id = req.params.id
    Employee.findById(id,(err,editById)=>{
        if(err) return next(err);
        res.json(editById);
    });
});
//GET - info the user by id
employRoute.route('/info/:id').get((req, res)=>{
    let id = req.params.id
    Employee.findById(id,(err,infoById)=>{
        if(err) return next(err);
        res.json('Show info successfuly! ' + infoById);
        console.log(infoById);
        
    });
});

//GET -Get by id - this show one user
employRoute.route('/get/:id').get((req, res)=>{
    let id = req.params.id
    Employee.findById(id,(err,getbyId)=>{
        if(err) return next(err);
        res.json(getbyId);
    });
});


//POST - update user by id 
employRoute.route('/update/:id').post((req, res)=>{
    let id = req.params.id
    Employee.findById(id, (err, updateById)=>{
        if(!updateById){
        console.log(err);
        return new Error('Could not find record!');
        }
        else{
            updateById.empId = req.body.empId
            updateById.empName = req.body.empName
            updateById.empFamily = req.body.empFamily
            updateById.empEmail = req.body.empEmail          
            updateById.empAddress = req.body.empAddress

            updateById.save().then(emp=>{
                console.log(emp);
                res.json('update successfuly!' + emp);
            }).catch(err => {
                    console.log(err);
                    res.status(400).send('Unable to update!');
                });
        }
    });
});


module.exports = employRoute;