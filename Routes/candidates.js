const express = require('express');

const Candidates = require('../models/candidates');

const router = express.Router();
router.get('/', function (req, res) {
    let candidates = Candidates.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        else {
            res.json(data);
        }
    });
});


module.exports = router;