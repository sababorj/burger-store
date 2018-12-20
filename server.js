var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

// Serve static content for my application from the "public" directory
app.use(express.static('public'));

// allow request body in JSON and URLENCODED format
app.use(express.json());
app.use(express.urlencoded( { extended : true }));

// setting up my handlebars
var exphbr = require('express-handlebars')
app.engine('handlebars' , exphbr( { defaultLayout : 'main' }));
app.set("view engine", 'handlebars')

// burger.update("1",function(res){
//     console.log(res)
// })

var router = require('./controllers/burgerControler')
app.use(router);


app.listen(port , () => {
    console.log(`App is listening to port ${port}`)
})