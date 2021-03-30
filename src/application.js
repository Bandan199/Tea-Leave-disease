const express = require("express");
const varPath = require("path");
const app = express();
const port = process.env.PORT || 3000;


const staticpath = varPath.join(__dirname,"../public");


app.use(express.static(staticpath));
app.set("views" , varPath.join(__dirname,"../views"));

app.set('view engine', 'hbs');


app.get("/",(req,res) =>
{
    console.log("index started")
    res.render('index');
  
})



app.get("/result",(req,res) =>
{
    res.render('result');
})


app.get("*",(req,res) =>
{
    res.render('error');
})


app.listen(port, () =>
{
    console.log('server is running');
})