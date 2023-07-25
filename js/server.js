const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const fibonacciModule = require('./fibonacci');

var app = express();

// phasephrase shanu
// Application level middleware app.use; Auth middleware, Logging Middleware, 
// Router level middleware router.use
// Built-in middleware express.static,express.json,express.urlencoded
// Error handling middleware app.use(err,req,res,next)
// Thirdparty middleware bodyparser,cookieparser

// application level middleware
// const LoggerMiddleware = (req,res,next) =>{
//     console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
//     next();
// }
// app.use(LoggerMiddleware);

// Built-in middleware
app.use(express.json())
app.use(express.urlencoded({ 'extended': true}));

// Error handling middleware
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json({"message":"Something broke!"})
})

// Thirdparty middleware
app.use(morgan('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));
app.use(morgan('dev'));

app.get("/testrequest", (req, res) => {
    res.status(200).json({"message": "I am unblocked now"})
});

app.get("/slowrequest", async (req, res) => {
    setTimeout(() => res.json({ message: "sry i was late" }), 10000) //setTimeout is used to mock a network delay of 10 seconds
});

app.get('/fibonacci', (req, res) => {
    const startTime = new Date();
    const result = fibonacciModule.fibonacci(parseInt(req.query.number));
    const endTime = new Date();
    res.json({
        number: parseInt(req.query.number),
        fibonacci: result,
        time: endTime.getTime() - startTime.getTime() + "ms",
      })
})

app.get('/promisedFibonacci', async (req, res) => {
    const startTime = new Date();
    const result = await fibonacciModule.promisedFibonacci(parseInt(req.query.number));
    const endTime = new Date();
    res.json({
        number: parseInt(req.query.number),
        fibonacci: result,
        time: endTime.getTime() - startTime.getTime() + "ms",
      })
})

const port = process.env.PORT || 8080
app.listen(port, () => {console.log(`Server running on http://localhost:${port}/`)})