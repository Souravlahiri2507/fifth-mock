const express=require("express");
const {loginrouters}=require("./routes/loginRoute");
const {connect}=require("./db");
const cors=require("cors");
const {employeeroute}=require("./routes/employeeRoute");

const app=express();

app.use(cors());

app.use(express.json());

app.use("/",loginrouters);

app.use("/dashboard",employeeroute);

app.listen("8080",async()=>{

    try{
        await connect
        console.log("successfully connected");

    }catch(error)
    {
        console.log("not connected");

    }
})