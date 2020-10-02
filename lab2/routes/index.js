'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {


    res.render('index', { title: 'Dong' });
    //calculate function takes 3 parameters method,x,y
    //parse x and y
    //parseFloat(x)
    function calculate(method, x, y) {
        /*
        * 1.) check the method, is it = add, subtract,
        *  multiply or divide and if nots any of those return an error
        * 2.) if method = add, x + y
        * 3.) show operation using console log
        * */
        if (method == "add") {
            return x + " + " + y + " = " + (parseFloat(x) + parseFloat(y));
        } else if (method == "subtract") {
            return x + " - " + y + " = " + (parseFloat(x) - parseFloat(y));
        } else if (method == "multiply") {
            return x + " * " + y + " = " + (parseFloat(x) * parseFloat(y));
        } else if (method == "divide") {
            return x + " / " + y + " = " + (parseFloat(x) / parseFloat(y));
        } else {
            return "please input method to calculate";
        }
    }
    let method = req.query.method;
    let x = req.query.x;
    let y = req.query.y;
    //call calculate function call
    console.log(calculate(method, x, y));
    // display
    return res.send(calculate(method, x, y));
    //req = request
    //res = response
    //Send response
    


});

module.exports = router;
