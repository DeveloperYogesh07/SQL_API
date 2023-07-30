const mysql = require('mysql2');

var connection = mysql.createConnection({
     port:3306,
     host:"localhost",
     user:"root",
     password:"Yogesh@123",
     database:"crud"

});

connection.connect((err)=>{
   if(!err)
     console.log("connected to database!");
    else
    console.log(err);


})


module.exports = connection;