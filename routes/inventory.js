//import { Router } from "express";
var express = require('express');
var router = express.Router();
const inventory = require('../model/inventory');



router.post('/store', function(req, res) {
    inventory.store(req.body, function(err, result){
        res.redirect('/');
    });
});
module.exports = router;