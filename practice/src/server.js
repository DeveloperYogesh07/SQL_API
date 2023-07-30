const express = require('express');
const app = express();
const connection = require('./connecton/connection');
const route = require('./routes/routes');
const port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use('/product',route);

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`);
})