const mysql = require('mysql2');

var connection = mysql.createConnection({
     port:process.env.DB_PORT,
     host:process.env.DB_HOST,
     user:process.env.DB_USER,
     password:process.env.DB_PASS,
     database:process.env.MYSQL_DB

});

connection.connect((err)=>{
   if(!err)
     console.log("connected to database!");
    else
    console.log(err);


})

module.exports = connection;
