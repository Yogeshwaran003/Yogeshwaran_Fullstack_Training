const express = require("express")
const app=express()
app.get('/',(req,res)=>{
    res.send("<p> Welcome to backend yogi</p>")
})
app.get('/static',(req,res)=>{
    res.sendFile("C:/Users/yogiw/OneDrive/Desktop/profile-modification/fullstacktraing/Yogeshwaran_Fullstack_Training/index.html")
})
const port = 3000;
app.listen(port,()=>{console.log("Server is started")})