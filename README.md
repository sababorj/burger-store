# burger-store

burger-store is a a restaurant app that lets users input the names of burgers they'd like to eat. This is a full-stack application with MVC design pattern.  

node packages in use are: *express* ,*express-handlebars*, and *mysql*. An orm.js file has been prepared to contain the generic sql queries for application's database.

*File Design:* 
```
├── config
│    ├── connection.js
│    └── orm.js
├── controllers
│   └── burgersControler.js
├── db
│   ├── schema.sql
│   └── seed.sql
├── models
│   └── burger.js
├── node_modules
├── package.json
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── images
│       │   └── burger.png
│       └── js
│           └── burger.js 
└── views
│   ├── index.handlebars
│   └── layouts
│        └── main.handlebars
└── server.js
```

Please find the deployed application here: [link to Heroku!]