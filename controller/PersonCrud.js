
const person=require('../model/PersonSchema');
var mailer=require('../services/mailer');
//get db connection
const db=require('../services/db');

//add employee
let addPerson=async(email,pass,name,gender,hobbies,img)=>{
    try{
        console.log(email,pass,name,gender,hobbies);
    let add= await new person({personEmail:email,personPass:pass,personName:name,personGender:gender,personHobbies:hobbies,personImage:img}).save();
//    mailer.sendMailer(email,name,pass)
    return "Added Succesfull."
}
    catch(error){
        console.log('ERROR OCCURED :'+error);
    }
}

//find person by email
let findPerson=async(email,pass)=>{
    try{
        return await person.find({personEmail:email,personPass:pass});
    }
    catch(error){
        console.log(error);
    }
}


//update Persin Details by Email
let updatePerson=async(email,name,gender,hobbies)=>{
    try{
        let update= await person.updateOne({personEmail:email},{personName:name,personGender:gender,personHobbies:hobbies});
        return "Update Succesfull."
    }
    catch(error){
        console.log(error);
    }
}


//export methods
module.exports={addPerson,findPerson,updatePerson,}