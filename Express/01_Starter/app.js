//! Step 1 : - Import Express

import express  from "express"

//! Step 2 :- Initialize Express Application
const app = express()

//! Step 4 :- Create Routes

app.get("/",(req,res)=>{
  res.send("Home page")
}) //request handler function it take request from frontend to backend

app.get ("/about", (req,res)=>{
  res.send("About page")
})

app.get("/services",(req,res)=>{
  res.send("Services Page")
})

app.get ("/carrier",(req,res)=>{
  res.send("Carrier Page")
})

//! Step 3 :- Listen a Server

app.listen(9000,(err)=>{
  if(err){
    console.log("unable to start server");
    
  }console.log("server started at port",9000);
  
})