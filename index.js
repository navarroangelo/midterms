const express = require('express');
const app = express();

// Responding with 'Hello World!'
app.get('/', function(req, res) {
    console.log('There is a GET Request for the Homepage.')
    res.send('Here is the GET Method!')
})

// Responding with a POST Request
app.post('/', function(req, res) {
    console.log('A POST Request for the Home Page is Accessed.')
    res.send('Here is the POST Method!')
})

// Responding with a GET Request for the '/list_user' page
app.get('/list_user', function(req, res) {
    console.log('Got a GET Request for /list_user.')
    res.send('This is Page Listing!')
})

// Responding with a GET Request for the '/list_user' page
app.get('/ab*cd', function(req, res) {
    console.log('Got a GET Request for /ab*cd.')
    res.send('Pattern Match Page!')
})

var server = app.listen(4003, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Listening!')
})