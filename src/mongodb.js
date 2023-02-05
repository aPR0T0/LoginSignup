const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/WebDev")
.then(()=>{
    console.log("Mongo connected");
})
.catch(()=>{
    console.log("Failed to connect");
})

const logInSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true
    },
    password: {
        type:String,
        require:true
    }
})

const collection = new mongoose.model("Collection1", logInSchema)

module.exports=collection