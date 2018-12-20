var omr = require('../config/omr');

var burger = {
    // Get the list of all entries in 'burger' table
    Burgers : function(callback){
        omr.all('burger', function(result){
            callback(result)
        });
    },
    // create new entry in the 'burger' table
    create : function(newburger, callback){
        omr.create('burger', newburger, function(result){
            callback(result);
        });
    },
    // updating 'devour' column value to true in the 'burger' table
    update : function(id, callback){
        omr.update('burger', 'devour', "true" , "id", id, function(result){
            callback(result);
        });
    }
}

module.exports = burger;