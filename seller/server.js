const express = require("express");
const app = express();

const dbConfig = require('./db')
const port = process.env.PORT || 4000;
app.listen(port,()=> console.log("MongoDb Connected"));