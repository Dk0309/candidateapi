const express = require('express');

const Score = require('../models/score');

const router = express.Router();
router.get('/', function (req, res) {
    let scores = Score.find({},function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});
module.exports = router;