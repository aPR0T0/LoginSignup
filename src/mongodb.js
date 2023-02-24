const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://alqama:proto@cluster0.6njtdw3.mongodb.net/test")
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

const AddressSchema = new mongoose.Schema({
    email: {
        type: String,
        require:true
    },
    password: {
        type:String,
        require:true
    }
})

const collectionLog = new mongoose.model("Collection1", logInSchema)

const collectionAdd = new mongoose.model("Collection2", AddressSchema)

module.exports=collectionLog, AddressSchema