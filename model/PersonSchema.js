const mongoose=require('mongoose');

let personModel=mongoose.Schema({
    personEmail:{type:String,require:true,unique:true},
    personPass:{type:String,require:true},
    personName:{type:String},
    personGender:{type:String},
    personHobbies:{type:String}
});

module.exports=mongoose.model('person',personModel);