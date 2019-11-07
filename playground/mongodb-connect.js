// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');
var obj=new ObjectID(); 
console.log(obj)
var user = {name:"adel",age:27};
var {name}=user; 
console.log(name)
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if (err){
    return console.log('unable to connect to mdb')
  }
  console.log('connected to mongo db');
  // db.collection('Todos').insertOne({
  //   text:'Something to do', 
  //   complete:false, 
  // },(err,result)=>{
  //   if (err){
  //   return console.log('unable to insert todo',err)
  // }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })
  // db.collection('Users').insertOne({
  //   name:'adel', 
  //   age:25,
  //   location:'bennane', 
  // },(err,result)=>{
  //   if (err){
  //   return console.log('unable to insert todo',err)
  // }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
  // })
  db.close(); 
})