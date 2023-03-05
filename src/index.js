const express = require("express")
const app = express()
const path = require("path")
const {users, address, Sub} = require("./mongodb")
const templatePath =  path.join(__dirname, '../templates')

app.use(express.json())
app.set("views", templatePath)

// Get requests help the user to get the specific links when requested
app.get("/", (req,res)=>{
    res.sendFile(templatePath + "/home.html");   
})

app.get("/signup", (req,res)=>{
    res.sendFile(templatePath + "/signup.html");  
})

app.get("/login", (req,res)=>{
    res.sendFile(templatePath + "/login.html");  
})

app.get("/pricing", (req,res)=>{
    res.sendFile(templatePath + "/pricing.html");  
})

// Post requests help the server to get the information from the user
app.post("/login",async (req, res)=>{
    const data ={
        name:req.body.email,
        password:req.body.password
    }
    await users.insertMany([data]) // Waits as async is defined
    res.sendFile(templatePath + "/home.html");  
    
    } ) 

//res = response which is just a variable we expect from the form nothing else
app.post("/signup", async (req, res)=>{
const data ={
    name:req.body.email,
    password:req.body.password
}
await users.insertMany([data])
res.sendFile(templatePath + "/home.html");  

} ) // Should be same as your action defined in the login form's heading

app.post("/home", async( req, res)=>{
    const data={
        email:req.body.email,
        password:req.body.password
    }
    await address.insertMany([data])
    res.sendFile(templatePath + "/signup.html");  
})

app.listen(3000,()=> {
    console.log("port connected");
})