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
  // db.collection('Todos').find({
  //   _id:new ObjectID('5dc42b99dece78239c2aecac')
  //   }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2))
  // },(err)=>{
  //   console.log('enable to fetch todo',err)
  // })
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count: '+count);
  // },(err)=>{
  //   console.log('enable to fetch todo',err)
  // })
  db.collection('Users').find({name:"adel"}).count().then((count)=>{
    console.log('Users count: '+count);
  },(err)=>{
    console.log('enable to fetch todo',err)
  })
  // db.close(); 
})