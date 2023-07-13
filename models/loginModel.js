const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    email:String,
    password:String,
    confirmPassword:String
})

const usermodel=mongoose.model("users",userSchema);

module.exports={usermodel};