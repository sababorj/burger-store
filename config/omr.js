var connection = require('./connection');

var omr = {
    all : function(colName, tableName, conditionCol, ConditionValue, callback){
        var query = `SELECT ${colName} FROM ${tableName} WHERE ${conditionCol} = "${ConditionValue}";`;
        connection.query(query, (err, data) => {
            if (err){
                throw err
            }
            callback(data)
        });
    },
    
    create : function(tableName, newObj, callback){
        var query = `INSERT INTO ${tableName} SET ${newObj};`;
        connection.query(query, (err, result) => {
            if (err){
                throw err
            }
            callback(result)
        });
    },

    update : function(tableName, colName, newValue, callback){
        var query = `UPDATE ${tableName} SET ${colName} = "${newValue};"`;
        connection.query(query, (err, result) => {
            if (err){
                throw err
            } 
            callback(result)
        });
    }
}