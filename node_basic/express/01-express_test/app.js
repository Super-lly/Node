const express = require("express")

const app = express()

app.use('/',(req,res,next)=>{
  console.log(0);
  next()
},(req,res,next)=>{
  console.log(1);
  next()
},(req,res,next)=>{
  console.log(2);
  next()
})

app.use('/ajax',(req,res,next)=>{
  console.log(3);
  next()
})

app.use('/api',(req,res)=>{
  console.log(4);
})

app.listen(8080,()=>{
  console.log('localhost:8080');
})