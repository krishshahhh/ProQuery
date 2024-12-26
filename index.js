const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const Port = 8080;

app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:true}))

app.get('/home',(req,res)=>{
    res.render("home")
})

let users = [];


app.get("/signin",function(req,res){
    
    res.render("signin");
    console.log(info);
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/create-post",function(req,res){
    res.render("create-post");
});

app.get("/post",function(req,res){
    res.render("post");
});

app.listen(Port,(err)=>{
    if(err){
        throw Error;
    }
    console.log(`server are Running on Port ${Port}`);
})