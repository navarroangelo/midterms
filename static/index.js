const multer = require('multer');
const express = require('express');
const app = express();

// BODY PARSER REQUIREMENT
const bodyParser = require('body-parser');

// APPLICATION/X-WWW-FORM-URLENCODED PARSER
const urlencodedparser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFIle(__dirname + '/' + index.html);
});

app.get('/about', (req, res) => {
    res.sendFIle(__dirname + '/' + about.html);
});

app.get('/blog', (req, res) => {
    res.sendFIle(__dirname + '/' + blog.html);
});

app.get('/upload', (req, res) => {
    res.sendFIle(__dirname + '/' + upload.html);
});

app.get('/contact', (req, res) => {
    res.sendFIle(__dirname + '/' + contact.html);
});

app.get('/profile', (req, res) => {
    res.sendFIle(__dirname + '/' + profile.html);
});

// POST
app.post('/formPost', urlencodedparser, (req, res) => {
    // OUTPUT IN JSON FORMAT
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        id: req.body.worker_id,
        email: req.body.email,
        phone: req.body.phone,
        department: req.body.department
    };

    // OTHER FORMATTING
    const htmlPost =
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
            <p>
                <strong>
                    Worker ID:
                </strong> ${response.worker_id}
            </p>
            <p>
                <strong>
                    E-Mail:
                </strong> ${response.email}
            </p>
            <p>
                <strong>
                    Phone:
                </strong> ${response.phone}
            </p>
            <p>
                <strong>
                    Department:
                </strong> ${response.department}
            </p>
        </body>
        </html>`

    console.log(htmlPost);
    res.end(htmlPost);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});