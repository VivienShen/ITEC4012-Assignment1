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

//Coffee API route
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

//Tea API route 
app.get('/api/tea', (req, res) => {

    //call to database
    
    //return dummy data
    const tea = ["Fact 0. Tea is good for you.",
     "Fact 2. It takes around 2,000 tiny leaves to make just one pound of finished tea.", 
     "Fact 3. You should never use boiling water for tea as you'll burn the leaf.", 
     "Fact 4. Teabags were invented in the early 1900s.",
     "Fact 5. Do you store your tea near your coffee or in your spice cabinet? Don’t.", 
     "Fact 6. Earl Grey tea was named after the actual Earl Grey.", 
     "Fact 7. Black tea can affect iron absorption.", 
     "Fact 8. Tea is a diuretic – it makes you need to urinate.",
     "Fact 9. There are around 3,000 different types of tea.",
     "Fact 10. The leaves from the Raspberry plant can be steeped to produce a Herbal Tea."]
    
    //Sending a response
    res.send(JSON.stringify(tea));
});

//running the express http server on the port we specified
app.listen(port, () => {
    console.log("listening on port", port);
});

