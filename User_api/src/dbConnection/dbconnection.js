const { USER_NAME ,PASSWORD } = require('../config/constant')
const mysql = require('mysql2');

var connection = mysql.createConnection({
     port:3306,
     host:"localhost",
     user:USER_NAME,
     password:PASSWORD,
     database:"user"

});

connection.connect((err)=>{
   if(!err)
     console.log("connected to database!");
    else
    console.log(err);


})

module.exports = connection;
