const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");

const confrenceModule = require("./confrenceModule/routes/index");

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use("/confrenceModule", confrenceModule);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
    console.log("server started");

    mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connection open!!");
  })
  .catch((err) => {
    console.log(err);
  });

});