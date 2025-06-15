const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(session({
    secret: "nwaeinvawiore",
    saveUninitialized: true,
    resave: false
}));

app.listen(port, (err) => {
    if(err){
        console.error("Error: ", err);
    }
    else{
        console.error(`Server started on port ${port}`);
    }
});

const homeRouter = require("./routes/home.routes");
const cartRouter = require("./routes/cart.routes");
app.use("/home", homeRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res)=>{
    res.redirect("/home");
});