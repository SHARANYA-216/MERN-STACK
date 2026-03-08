import express from "express"
const app = express()
const productRouter = express.Router()
const userRouter = express.Router()

productRouter.get("/list", (req, res) => {
    res.redirect("https://chatgpt.com/")
});
userRouter.get("/list1", (req, res) => {
    res.send("user list")
});

app.use("/products", productRouter)
app.use("/users", userRouter)
app.listen(5000, () => console.log("server Started")) 

/* const Router = express.Router()
Router.get("/list", (req, res) => {
    res.send("Hello World")
})
app.use("/", Router)
app.listen(5000, () => console.log("server Started")) */