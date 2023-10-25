const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;
const connectDB = require("./model/db");
app.use("/api/auth", require("./auth/route"));
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(cookieParser());
//Connecting the Database
connectDB();

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
);
// Handling Error
process.on("unhandledRejection", (err) => {
  console.log(`An error occurred: ${err.message}`);
  server.close(() => process.exit(1));
});
