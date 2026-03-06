//embedded javascript code

import express from "express"
const app = express()
app.set("view engine","ejs")
app.set("views","views")
app.listen(5000,()=>console.log('Server Started'))

const users = [
    { id:1, name: "sharanya" , email: "sharanya@gmail.com", password: "1234"},
    { id:2, name: "Rani" , email: "rani@gmail.com", password: "4321"},
    { id:3, name: "charitha" , email: "cherry@gmail.com", password: "5678"},
];

//3 routes 3 pages

app.get("/login",(req,res)=>{
    res.render("login");
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.get("/",(req,res)=>{
    res.render("dashboard", { users });
});