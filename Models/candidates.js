const mongoose = require('mongoose');

let candidatesSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    }
});

let Candidates = module.exports = mongoose.model('candidates', candidatesSchema);