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

app.get('/api/coffee', (req, res) => {

    //call to database

    //return fun facts
    const coffee = ["Fact 1. Coffee drinkers are less likely to contract deadly diseases.",
     "Fact 2. Coffee decreases muscle pain.", 
     "Fact 3. Dark roasts have less caffeine than light roasted coffee", 
     "Fact 4. Coffee comes from a fruit.",
     "Fact 5. Goats originally discovered coffee.", 
     "Fact 6. Coffee was not introduced in America until the mid 1600s.", 
     "Fact 7. Decaf is not “caffeine free.”", 
     "Fact 8. Coffee reduces risk of suicide and depression.",
     "Fact 9. Adding cream to your coffee will prevent it from cooling faster.",
     "Fact 10. Coffee increases your fiber intake."]
    
    //Sending a response
    res.send(JSON.stringify(coffee));
});

app.get('/api/tea', (req, res) => {

    //call to database
    
    //Sending a response
    res.send(JSON.stringify(tea));
});

//running the express http server on the port we specified
app.listen(port, () => {
    console.log("listening on port", port);
});

