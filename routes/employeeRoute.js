const express=require("express");
const {emplomodel}=require("../models/emplo");

const employeeroute=express.Router();

employeeroute.post("/add",async(req,res)=>{

    let data=req.body

    try{

        let add=await emplomodel(data)
        await add.save()
        res.send({"msg":"data added"})

    }catch(error)
    {
        res.send({"msg":"something's wrong"})
    }
})

module.exports = {employeeroute};
