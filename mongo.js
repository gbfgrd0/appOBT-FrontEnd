const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://filhosdeares:katyusha9090@cluster0.6uuwwm5.mongodb.net/")
.then(()=>{
    console.log("MongoDB conectado!")
}).catch(()=>{
    console.log("Erro na conexão do MongoDB")
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection