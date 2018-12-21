var connection = require('./connection');

var orm = {
    // get the list of entries in a table
    all : function(tableName, callback){
        var query = "SELECT * FROM " +tableName+ ";";
        connection.query(query, (err, data) => {
            if (err){
                throw err
            }
            callback(data)
        });
    },
    
     // create new entry in a table
    create : function(tableName, newBurger, callback){
        var query = "INSERT INTO " +tableName+  "(name) VALUES ('" + newBurger+ "');";
        connection.query(query, (err, result) => {
            if (err){
                throw err
            }
            callback(result)
        });
    },

         // update one column value for an entry in a table
    update : function(tableName, colName, newValue, conditionCol,ConditionValue, callback){
        var query = "UPDATE " +tableName+ " SET " +colName+ " = "+newValue+" Where " + conditionCol +" = "+ConditionValue +";";
        connection.query(query, (err, result) => {
            if (err){
                throw err
            } 
            callback(result)
        });
    }
}

module.exports = orm;