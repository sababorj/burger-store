var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/', (req, res)=> {
   burger.Burgers("true",function(res){
        return console.log(res)
    })
    var uneaten = burger.Burgers("false",function(res){
        return res
    })
    console.log('Eaten:'+eaten);
    console.log('Uneaten'+uneaten);
    res.render(index);
})

module.exports = router;