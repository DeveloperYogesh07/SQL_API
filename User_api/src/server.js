const express = require('express')
const app = express();
const connection = require('./dbConnection/dbconnection')
const  router  = require('./Router/Routes');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))
const port = 5000;

app.use('/',router);

app.listen(port,()=>{
    console.log(`server is listening to port:${port}`);
})