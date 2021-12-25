const express=require('express')//use require to impotrt something
const app=express();//initializing the express
const path=require('path');
const port=9000;//port where to represent
const url="127.0.0.1"
var bodyParser = require('body-parser')
var mongo=require("mongodb")
const {MongoClient,ObjectId}=require('mongodb');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'.','views','ht.html'));
})
var User=require('./Routes/user')
app.use('/use',User)
app.use('/use',User)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

app.get('/ue',(req,res)=>{
  MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/socialapp?retryWrites=true&w=majority",function(err,cluster){
    if(err)
    console.log(err)
    else{
      const db= cluster.db('expressdata');
         const collection= db.collection('logindata');
      collection.find().toArray(function(err,data){
if(err)res.send(err);
else res.send(data);
      })
      
    }
  })
})









//how to use css files inside this is by using predefined function
//app.use('/public (name of the folder),express.static('public (pass name of the folder))')