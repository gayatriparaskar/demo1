// console.log("Welcome")
const express = require("express")

const app=express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.get('/',(req,res)=>{
    res.send("welcome")
})



app.get('/contact',(req,res)=>{
    res.send("contact page")
})
 app.get('/services',(req,res)=>{
    res.send("Services page")
 })
const port=8000
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})