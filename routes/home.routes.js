const express = require("express");
const session = require("express-session");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("home");
});
router.get("/getCategories", (req, res)=>{
    const data = require("../data/mydata.js");
    res.json({"categories":data.categories.map(el => el.name)});
});
router.get("/getProducts/:id", (req, res)=>{
    const data = require("../data/mydata.js");
    res.json({"category":data.categories.find(el => el.name.toLowerCase() == req.params.id)});
});

module.exports = router;