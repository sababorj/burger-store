var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

router.get('/', (req, res)=> {
   burger.Burgers(function(burger){
        console.log(burger);
        res.render('index', burger);
    })
})

router.post('/api/add/:name', (req,res) => {
    var name = req.params.name;
    burger.create(name, function(result){
        // if successfully added to the table
        if(result.serverStatus === 2){
            res.json(true)
        } else {
            res.json(false);
            console.log(result);
        }
    })
})

router.put('/api/update/:id', (req,res) => {
    var id = req.params.id;
    burger.update(id, function(result){
        console.log('update happend')
            if(result.affectedRows === 1){
                console.log(result)
                res.json(true)
            } else {
                console.log(result)
                res.json(false)
            }
        })
})



module.exports = router;