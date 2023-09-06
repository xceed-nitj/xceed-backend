const express = require("express");
const app = express();
const mongoose = require("mongoose");

const routes=require('./routes/announcements');

app.listen(8000, () => {
  console.log("server started");
});

app.use('/', routes);

const MONGO_URI="mongodb+srv://Arshdeep:A1r2s3d4e5@cluster0.441ajgx.mongodb.net/ConfrenceModules";

const db= mongoose.connect(MONGO_URI
  )
      .then(() => {
          console.log("connection open!!");
  
  
      }) 
      .catch(err => {
          console.log(err);
      })


