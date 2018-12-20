var omr = require('../config/omr');

var burger = {
    Burgers : function(conditionValue, callback){
        omr.all('burger', 'devour', conditionValue, function(result){
            callback(result[0]);
        });
    },
    create : function(newburger, callback){
        omr.create('burger', newburger, function(result){
            callback(result);
        });
    },
    update : function(id, callback){
        omr.update('burger', 'devour', "true" , "id", id, function(result){
            callback(result);
        });
    }
}

module.exports = burger;