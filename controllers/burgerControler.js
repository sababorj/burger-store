var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/', (req, res)=> {
   burger.Burgers(function(Eaten,notEaten){
        console.log(Eaten);
        console.log(notEaten);
    })
    // res.render(index);
})

module.exports = router;