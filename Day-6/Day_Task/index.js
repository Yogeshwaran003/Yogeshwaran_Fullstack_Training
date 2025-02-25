const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("This is page one")
})
app.get("/1",(req,res)=>{
    res.send("This is page two")
})
app.get("/2",(req,res)=>{
    res.send("This is page three")
})
app.get("/3",(req,res)=>{
    res.send("This is page four")
})
app.get("/4",(req,res)=>{
    res.send("This is page five")
})

app.listen(port,()=>{console.log("The server is connented")})