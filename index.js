const express = require("express");
const path = require("path");
const app = express();
const Port = 8080;

app.set("view engine","ejs");
// app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req,res)=>{
    res.render("home")
})
app.use(express.static(path.join(__dirname,"public")))

app.get("/signin",function(req,res){
    res.render("signin");
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