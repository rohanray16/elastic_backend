require('dotenv').config();
const express = require("express");
const client = require("./elasticsearch/client");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
mongoose.set("strictQuery", true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const apiRouter = require("./app/routers/ApiRoutes.js");

app.use("/api", apiRouter);
console.log("connecting to db...");
// console.log(process.env.MONGODB_URI)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("connected !!!");
      console.log(
        `rmgmedia backend api is running on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
