require("dotenv").config();
const express = require("express");
const app = express();
const connection = require("./dbConnection/dbconnection");
const router = require("./Router/Routes");
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(process.env.APP_PORT, () => {
  console.log(`server is listening to port:${process.env.APP_PORT}`);
});
