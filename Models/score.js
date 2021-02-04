const mongoose = require('mongoose');

let scoreSchema = mongoose.Schema({
    first_round: {
        type: Number,
        required: true
    },
    second_round: {
        type: Number,
        required: true
    },
    third_round: {
        type: Number,
        required: true
    }
});

let Score = module.exports = mongoose.model('scores', scoreSchema);