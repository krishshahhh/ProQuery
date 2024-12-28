const { log } = require("console");
const express = require("express");
const path = require("path");
const app = express();
const Port = 8080;

app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("home")
})

let usersDB = [
    {
        user:"krish",
        pass:12345678
    }
];

let posts = [
    {
        username:"kehsv",
        Content:"how to start trading"
},
    {
        username:"girdhri",

        Content:"how to start trading"
},
    {
        username:"mohit",
        Content:"how to start trading"
}

];

app.get("/posts",(req,res)=>{
    res.render("post",{posts});
});

app.get("/posts/n",(req,res)=>{
    res.render("create-post");
});

app.post("/posts", (req, res) => {
    let { username, Content } = req.body;
    posts.push({ username, Content });
    res.redirect("/posts");
});

app.get("/signin",(req,res)=>{
    
    res.render("signin");
    console.log(info);
});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",(req,res)=>{
        let {username,password} = req.body
        let userfound = usersDB.find(u => u.user === username && u.pass === password)


        if(userfound){
            res.redirect("/posts")
            
        }
        else{
            // res.sendStatus(404);
        }
});



app.listen(Port,(err)=>{
    if(err){
        throw Error;
    }
    console.log(`server are Running on Port ${Port}`);
})