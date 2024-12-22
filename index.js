const express = require("express");
const app = express();
const Port = 8080;

app.set("view engine","ejs");
app.use(express.static(Path.join(__dirname,"public")))



app.listen(Port,(err)=>{
    if(err){
        throw Error;
    }
    console.log(`server are Running on Port ${Port}`);
})