const multer = require('multer');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/', (req, res) => {
    res.sendFIle(__dirname + '/' + index.html);
});

app.get('/about', (req, res) => {
    res.sendFIle(__dirname + '/' + about.html);
});

app.get('/blog', (req, res) => {
    res.sendFIle(__dirname + '/' + blog.html);
});

app.get('/upload', (req, res) => {
    res.sendFIle(__dirname + '/' + index.html);
});

app.get('/contact', (req, res) => {
    res.sendFIle(__dirname + '/' + contact.html);
});

app.get('/profile', (req, res) => {
    res.sendFIle(__dirname + '/' + profile.html);
});

const port = process.env.PORT || 4001;
app.listen(port, () => {
    console.log(`Listening at Port ${port}`);
});