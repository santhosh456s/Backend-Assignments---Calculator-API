const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result;
    let responseMessage = {};
    if(num1< -1000000 || num2 < -1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.sum = undefined;
        res.send(responseMessage);
        return;
    }
    if(num1 > 1000000 || num2 > 1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.sum = undefined;
        res.send(responseMessage);
        return;
    }
    if(typeof num1 === "string" || typeof num2 === "string"){
        responseMessage.status = "error";
        responseMessage.message = "Invalid data types";
        responseMessage.sum = undefined;
        res.send(responseMessage);
        return;
    }
    result = parseFloat(num1) + parseFloat(num2);
    if(result < -1000000){
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.sum = undefined;
        res.send(responseMessage);
        return;
    }
    if(result > 1000000){
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.sum = undefined;
        res.send(responseMessage);
        return;
    }
    responseMessage.status = "success";
        responseMessage.message = "the sum of given two numbers";
        responseMessage.sum = result;
        res.send(responseMessage);
})

app.post("/sub", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result;
    let responseMessage = {};
    if(num1< -1000000 || num2 < -1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.difference = undefined;
        res.send(responseMessage);
        return;
    }
    if(num1 > 1000000 || num2 > 1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.difference = undefined;
        res.send(responseMessage);
        return;
    }
    if(typeof num1 === "string" || typeof num2 === "string"){
        responseMessage.status = "error";
        responseMessage.message = "Invalid data types";
        responseMessage.difference = undefined;
        res.send(responseMessage);
        return;
    }
    result = parseFloat(num1) - parseFloat(num2);
    if(result < -1000000){
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.difference = undefined;
        res.send(responseMessage);
        return;
    }
    if(result > 1000000){
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.difference = undefined;
        res.send(responseMessage);
        return;
    }
    responseMessage.status = "success";
        responseMessage.message = "the difference of given two numbers";
        responseMessage.difference = result;
        res.send(responseMessage);
})

app.post("/multiply", (req, res) => {
    let num1 =(req.body.num1);
    let num2 = (req.body.num2);
    let result;
    let responseMessage = {};
    if(parseFloat(num1) < -1000000 || parseFloat(num2) < -1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(Number(num1) !== parseFloat(num1) || Number(num2) !== parseFloat(num2)){
        responseMessage.status = "failure";
        responseMessage.message = "Invalid data types";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    result = parseFloat(num1) * parseFloat(num2);
    if(result < -1000000){
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(result > 1000000){
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
        responseMessage.status = "success";
        responseMessage.message = "The product of given numbers";
        responseMessage.result = (result);
        res.send(responseMessage);
})

app.post("/divide", (req, res) => {
    let num1 =(req.body.num1);
    let num2 = (req.body.num2);
    let result;
    let responseMessage = {};
    if(parseFloat(num2) === 0){
        responseMessage.status = "error";
        responseMessage.message = "Cannot divide by zero";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(parseFloat(num1) < -1000000 || parseFloat(num2) < -1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(parseFloat(num1) > 1000000 || parseFloat(num2) > 1000000){
        //result = num1 + num2;
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(Number(num1) !== parseFloat(num1) || Number(num2) !== parseFloat(num2)){
        responseMessage.status = "failure";
        responseMessage.message = "Invalid data types";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    result = parseFloat(num1) / parseFloat(num2);
    if(result < -1000000){
        responseMessage.status = "error";
        responseMessage.message = "Underflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    if(result > 1000000){
        responseMessage.status = "error";
        responseMessage.message = "Overflow";
        responseMessage.result = undefined;
        res.send(responseMessage);
        return;
    }
    responseMessage.status = "success";
        responseMessage.message = "The division of given numbers";
        responseMessage.result = result;
        res.send(responseMessage);
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;