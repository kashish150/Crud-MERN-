const mongo=require("mongodb");
const {MongoClient,ObjectId}=require('mongodb');
const express=require('express');
var router = express.Router();
var path=require('path');
var bodyParser = require('body-parser')


router.delete('/delete:id',function(req,res){
    var id=req.params.id
    MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err,cluster){
        if(err)console.log(err)
        else{
            var db=cluster.db('expressdata');
            var co=db.collection('logindata');
            co.deleteOne({_id:ObjectId(id)},function(err,suc){
                if(err)console.log(err)
                else
                console.log("deleted");
            })
        }
    })

})
router.put('/update/:id',function(req,res){
    var id=req.params.id
    var name=req.query.name
    var pass=req.query.password
    var updated={
        name:name,
        password:pass
    }
    MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err,cluster){
        if(err)console.log(err)
        else{
            var db=cluster.db('expressdata');
            var co=db.collection('logindata');
            co.updateOne({_id:ObjectId(id)},{
                $set:updated
            },function(err,succ){
                if(err)console.log(err)
                else res.send("data updated")
            })
        }
    })

})


router.post('/userdata',function(req,res){
    var name=req.body.name
    var password=req.body.password
    var userdata={
        name:name,
        password:password,
        
    }
    MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err,cluster){
        if(err){
            console.log("while connectiong");  
        }
        else{
           const db= cluster.db('expressdata');
         const collection= db.collection('logindata');
        collection.insertOne(userdata,function(err,succ){
            if(err)
            console.log(err);
            else console.log(succ)
        })
        }
      })


    res.send(userdata)
})

router.post('/postdata',function(req,res){
    var name=req.body.name
    var password=req.body.pass
    var userdata={
        name:name,
        password:password,
        
    }
    MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err,cluster){
        if(err){console.log(err);}
        else{
            var dbrefr=cluster.db('expressdata');
            var colref=dbrefr.collection('logindata');
             colref.insertOne(userdata,function(err,succ){
                 if(err)console.log(err)
                 else{
                     console.log("completed")
                     res.send(userdata)
                 }
             })
        }
})
})



router.get('/u1',(req,res)=>{
    MongoClient.connect("mongodb+srv://kashish:kashish123@cluster0.eugpi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",function(err,cluster){
        if(err)console.log(err);
        else{
            var dbref=cluster.db('expressdata')
            var collectionref=dbref.collection('logindata');
            collectionref.find().toArray(function(err,succ){
               if(err)res.send(err);
               else res.send(succ);
            })
        }
    })
})





router.get('/userstats',(req,res)=>{
    res.send("get user data here");
})



router.get('/htmlfile',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","Views","ht.html"))
})

module.exports=router;