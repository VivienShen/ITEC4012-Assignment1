/*ITEC4012 Assignment 1*/

//requiring express
const express = require('express');

//initializing the express app
const app = express();

//specifying a port to listen on localhost: 9000
const port = 9000;

//API / urls
app.get('/', (req, res) => {
    res.send("Hi from the express server!");
});


//running the express http server on the port we specified
app.listen(port, () => {
    console.log("listening on port", port);
});

