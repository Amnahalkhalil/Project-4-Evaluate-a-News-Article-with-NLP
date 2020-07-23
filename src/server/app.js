var PORT = process.env.PORT || 8081;
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express');
const app = express();
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser')
const cors = require('cors');
var aylien = require("aylien_textapi");


app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));

});

app.listen(PORT, function () {
    console.log("http://localhost:" + PORT);
});


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

// Post
app.post('/post', function (req, res) {
    textapi.sentiment({
        'url': req.body.text
    }, function (error, response) {

        console.log(`Your API key is ${process.env.API_KEY}`);
        res.send(response)

    });

});

module.exports = app;

