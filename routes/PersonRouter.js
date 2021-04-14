var express = require('express');
const app=express();
var router = express.Router();
const path=require('path')
const person=require('../controller/PersonCrud');

//Home page route.
router.get('/', function (req, res) {
    console.log("inside home")  
    
});
//signUp
router.get('/signUp', function (req, res) {
 console.log("inside sign up get")
 const addStatus=person.addPerson(req.query.email,req.query.pass,req.query.name,req.query.gender,req.query.hobbies)
 addStatus.then(result=>{
     res.render('login' ,{msg:result})
 } ) .catch(error=> console.log(error))
})
//login 
router.get('/findPerson',function(req,res)
{
    console.log("Inside login get "+req.query.email +req.query.pass)
    const getStatus=person.findPerson(req.query.email,req.query.pass)
 getStatus.then(result=>{res.render('userInfo' ,{userInfo:result})})
  .catch(error=> console.log(error)) 

})
//update
router.get('/update',function(req,res)
{
    console.log("Inside update get "+req.query.email)
    const updateStatus=person.updatePerson(req.query.email,req.query.name,req.query.gender,req.query.hobbies)
 updateStatus.then(result=>{res.render('login' ,{msg:result})})
  .catch(error=> console.log(error))

})
module.exports=router;