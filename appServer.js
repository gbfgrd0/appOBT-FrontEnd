const express = require('express');
const collection = require('../mongo.js');
const cors = require('cors');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/",cors(),(req, res)=>{

})

app.post("http://localhost:3000/login",async(req, res)=>{
    const{email, password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
          res.json("exist")
        }else{
          res.json("notexist")
        }
   }
    catch(e){
      res.json("notexist")
      console.log(e)
    }
})

app.post("http://localhost:3000/register",async(req, res)=>{
  const{email, password} = req.body

  const data = {
    email:email,
    password: password
  }

  try{
      const check = await collection.findOne({email:email})

      if(check){
        res.json("exist")
      }else{
        res.json("notexist")
        await collection.insertMany([data])
      }
 }
  catch(e){
    res.json("notexist")
    console.log(e)
  }
})

app.listen(8000, ()=>{
  console.log("Porta conectada!")
})