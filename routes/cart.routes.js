const express = require("express");
const router = express.Router();

router.get("/", (req, res)=>{
    res.render("cart");
});

router.get("/getAll", (req, res)=>{
    if(!req.session.cart){
        req.session.cart = {};
    }
    res.json(req.session.cart);
});

router.put("/add/:id", (req, res)=>{
    const data = require("../data/mydata.js");
    const ids = [];
    const names = [];
    data.categories.forEach(cat => cat.products.forEach(el => {
        ids.push(el.id);
        names.push(el.name);
    }));

    if(ids.includes(req.params.id)){
        if(!req.session.cart){
            req.session.cart = {};
        }
        if(!req.session.cart[req.params.id]){
            let index = ids.indexOf(req.params.id);
            req.session.cart[req.params.id] = [names[index], 0];
        }
        if(req.session.cart[req.params.id][1]<Number.MAX_SAFE_INTEGER){
            req.session.cart[req.params.id][1]++;
        }
        res.json(req.session.cart);
    }
    else{
        res.status(404).end();
    }
});

router.delete("/remove/:id", (req, res)=>{
    const data = require("../data/mydata.js");
    const ids = [];
    data.categories.forEach(cat => cat.products.forEach(el => ids.push(el.id)));
    if(ids.includes(req.params.id)){
        if(!req.session.cart){
            req.session.cart = {};
        }
        if(req.session.cart[req.params.id] && req.session.cart[req.params.id][1]>0){
            req.session.cart[req.params.id][1]--;
            if(req.session.cart[req.params.id][1]===0){
                delete req.session.cart[req.params.id];
            }
        }
        res.json(req.session.cart);
    }
    else{
        res.status(404).end();
    }
});

router.delete("/removeAll", (req, res) => {
    req.session.cart = {};
    res.json(req.session.cart);
})

module.exports = router;