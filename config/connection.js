var mysql = require('mysql');

// Set up connection 
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burger_db"
});

// make the connection
connection.connect( (err) => {
    if (err) {
        console.log(`Error connection to the databse: ${err}`);
    } else {
        console.log(`connect to the database using ${connection.threadId} thread.`);
    }
})

// export connection to use in omr.js
module.exports = connection;