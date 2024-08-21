const express = require('express');
const app = express();

app.use(express.static('public'));

// Responding with 'Hello World!'
app.get('/', function(req, res) {
    res.send('You have successfully created second app!')
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port

    console.log('Second App Listening at http://%s:%s', host, port);
})