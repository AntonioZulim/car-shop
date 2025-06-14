const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.listen(port, (err) => {
    if(err){
        console.log("Error: ", err);
    }
    else{
        console.log(`Server started on port ${port}`);
    }
});

const homeRouter = require("./routes/home.routes");
const cartRouter = require("./routes/cart.routes");
app.use("/home", homeRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res)=>{
    res.redirect("/home");
});