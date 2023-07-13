const express=require("express");
const {usermodel}=require("../models/loginModel");
const loginrouters=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

loginrouters.post("/signup",async(req,res)=>{

    let {email,password}=req.body;
    try{
        let data=await usermodel.findOne({email})
        if(!data)
        {
            bcrypt.hash(password, 5, async(err, hash)=> {

                if(hash)
                {
                    let masai=await usermodel({email,password:hash});
                    await masai.save();
                    
                    res.send({"msg":"user created"});
                }
            });

        }else{
            res.send({"msg":"user already registered!"});

        }
    }catch(error)
    {
        res.send({"msg":"somthing is wrong"});

    }

})

loginrouters.post("/login",async(req,res)=>{
    let {email,password}=req.body;
    try{
        let data=await usermodel.findOne({email});
        if(data)
        {
            bcrypt.compare(password, data.password, async(err, result)=> {
                
                if(result)
                {
                    const token = jwt.sign({ userID:data._id}, 'sourav');
                    res.send({"token":token});


                }else{
                    res.send({"msg":"password is incorrect"});
                }
            })

        }else{
            res.send({"msg":"pls login first"});
        }

    }catch(error)
    {
        res.send({"msg":"something's worng"});   
    }
})



module.exports={loginrouters}