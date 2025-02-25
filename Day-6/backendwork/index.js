const express = require("express")
const mdb = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()
const app=express()
const port = 3000;

mdb
    .connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("DataBase Connected Successfully");
    })
    .catch((err)=>console.log("Check the connection",err))

app.get('/',(req,res)=>{
    res.send("<p> Welcome to backend yogi</p>")
})
app.get('/static',(req,res)=>{
    res.sendFile("C:/Users/yogiw/OneDrive/Desktop/profile-modification/fullstacktraing/Yogeshwaran_Fullstack_Training/index.html")
})

app.listen(port,()=>{console.log("Server is started")})