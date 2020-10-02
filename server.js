const express=require('express')
const app=express()
const {sendmailvia}=require('./index')

app.get('/sendmail',(req,res)=>{
   sendmailvia();
   
    res.sendStatus(200);
})





app.listen(4000,()=>{
    console.log("server hossted at http://localhost:4000/")
})