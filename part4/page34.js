import express from "express"
import session from "express-session"
import expressLayouts from "express-ejs-layouts";

const app =express();
app.use(expressLayouts)
app.use(express.static("public"))
app.set("layout", "layout")
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080,()=>console.log('Server Started'))

app.use(express.urlencoded({extended:true}))

let users = [
  { name: "sharanya", email: "sharanya@gmail.com", password: "1234" },
  { name: "rani", email: "rani@gmail.com", password: "1234" },
  { name: "charitha", email: "charitha@gmail.com", password: "1234" },
];

app.use(
  session({
    secret:'mySecretKey',
    resave:false,
    saveUninitialized:false,
  }),
);

app.get("/login",(req,res)=>{
    res.render("login",{error:null});
})

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      req.session.user=user//inspect-app-cookie session id created
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
  // res.redirect("/");
});

app.get("/register",(req,res)=>{
    res.render("register");
})


app.post("/register",(req,res)=>{
    //const {name,email,password}=req.body
    users=[...users,req.body]
    res.redirect("/")
})


app.get("/",(req,res)=>{
  // if(req.session.user){
  //   res.render("dashboard",{users});
  // }
  res.render("dashboard", { users })
});

