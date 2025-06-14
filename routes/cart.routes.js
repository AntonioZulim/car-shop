const express = require("express");
const router = express.Router();

router.use(express.static("public"));

router.get("/", (req, res)=>{
    res.redirect("/cart/getAll");
});
router.get("/getAll", (req, res)=>{
    res.render("cart");
});

module.exports = router;