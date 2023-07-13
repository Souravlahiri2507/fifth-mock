const mongoose=require("mongoose");

const emploschema=mongoose.Schema({
    department:String,
    salary:Number,
    userID:String,
    firstName:String,
    lastName:String,
    email:String,
});

const emplomodel=mongoose.model("employee",emploschema);

module.exports={emplomodel};