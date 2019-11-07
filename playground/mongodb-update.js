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
  db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5dc45043df7bef8ebe544b28')},{
    $set:{
      completed:true
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result)
  })
  //db.close();
})