const express = require('express');
const app = express();

// BODY PARSER REQUIREMENT
const bodyParser = require('body-parser');

// APPLICATION/X-WWW-FORM-URLENCODED PARSER
const urlencodedparser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/process_post', urlencodedparser, (req, res) => {
    // OUTPUT IN JSON FORMAT
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
    };

    // // OTHER FORMATTING
    const htmlRes =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <style>
                body {
                    background-color: whitesmoke;
                    text-align: center;
                    padding: 1em;
                }
                p {
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <h1>User Information Summary</h1>
            <p>
                <strong>
                    First Name:
                </strong> ${response.first_name}
            </p>
            <p>
                <strong>
                    Last Name:
                </strong> ${response.last_name}
            </p>
        </body>
        </html>`

    // console.log(response);
    // res.end(JSON.stringify(response));

    console.log(htmlRes);
    res.end(htmlRes);
});

var server = app.listen(3000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Listening for POST!')
})