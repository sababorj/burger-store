var express = require('express');
var router = express.Router();

var burger = require('../models/burger');

// setting up the home rout
router.get('/', (req, res)=> {
   burger.Burgers(function(burger){
        console.log(burger);
        res.render('index', {burger: burger});
    })
})

// setting up the post rout
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


// setting up the update rout
router.put('/api/update/:id', (req,res) => {
    var id = req.params.id;
    burger.update(id, function(result){
                // if record is successfully updated
            if(result.affectedRows === 1){
                res.json(true)
            } else {
                res.json(false)
            }
        })
})

module.exports = router;