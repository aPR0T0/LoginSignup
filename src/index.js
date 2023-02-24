const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")
const templatePath =  path.join(__dirname, '../templates')

app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.get("/", (req,res)=>{
    res.render("login");        
})

app.get("/signup", (req,res)=>{
    res.render("signup");
})
app.post("/login",async (req, res)=>{
    const data ={
        name:req.body.name,
        password:req.body.password
    }
    await collection.insertMany([data]) // Waits as async is defined
    res.render("home")
    
    } ) 

//res = response which is just a variable we expect from the form nothing else
app.post("/signup", async (req, res)=>{
const data ={
    name:req.body.name,
    password:req.body.password
}
await collection.insertMany([data])
res.render("home")

} ) // Should be same as your action defined in the login form's heading

app.listen(3000,()=> {
    console.log("port connected");
})