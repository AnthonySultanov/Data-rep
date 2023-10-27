// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Route that takes a name parameter in the URL
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
});

// Sample JSON data for books
const jsonBooksData = {
    "books": [
        {
            "title": "Learn Git in a Month of Lunches",
            "isbn": "1617292419",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
            "status": "MEAP",
            "authors": [
                "Rick Umali"
            ],
            "categories": []
        },
        {
            "title": "MongoDB in Action, Second Edition",
            "isbn": "1617291609",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
            "status": "MEAP",
            "authors": [
                "Kyle Banker",
                "Peter Bakkum",
                "Tim Hawkins",
                "Shaun Verch",
                "Douglas Garrett"
            ],
            "categories": []
        },
        {
            "title": "Getting MEAN with Mongo, Express, Angular, and Node",
            "isbn": "1617292036",
            "pageCount": 0,
            "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
            "status": "MEAP",
            "authors": [
                "Simon Holmes"
            ],
            "categories": []
        }
    ]
};

// Route to serve JSON book data
app.get('/api/books', (req, res) => {
    res.json(jsonBooksData);
});

// Route to serve an HTML file named "index.html"
app.get('/test', (req, res) => {
    var options = {
        root: path.join(__dirname)
    };
    res.sendFile("./index.html", options);
});

// Route to handle a GET request with query parameters for a name
app.get('/name', (req, res) => {
    res.send("Hi " + req.query.first + " " + req.query.last);
});

// Route to handle a POST request with a JSON body containing a "first" property
app.post('/name', (req, res) => {
    console.log(req.body.first);
    res.send("First Name: " + req.body.first);
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});