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
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
  //   console.log(result);
  // });
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });
  // db.close(); 
})