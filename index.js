const express = require('express');

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Test');
const db = mongoose.connection;

const candidates = require('./routes/candidates');
app.use('/candidates', candidates);
app.use('/highest',candidates)

const score = require('./Routes/score');
app.use('/score',score);



db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
db.on('error', function(){
    console.log(err);
});

app.get('/', function (req, res) {
    res.send('hello world')
});


app.listen(3000, function(){
    console.log("Server started on localhost:3000");
});