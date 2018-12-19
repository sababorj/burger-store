var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var exphbr = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded( { extended : true }));

app.engine('handlebars' , exphbr( { defaultLayout : 'main' }));
app.set("view engine", 'handlebars')

var mysql = require('mysql');

var connection = mysql.createConnection ( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database : "burger_db"
});

connection.connect((err)=> {
    if (err) throw err;
    console.log("connected to the database")
});

app.get('/', (req, res) => {
    res.send('Wellcome to my burger store')
})

app.listen(port , () => {
    console.log(`App is listening to port ${port}`)
})