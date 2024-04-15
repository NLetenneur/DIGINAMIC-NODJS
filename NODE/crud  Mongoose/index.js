const express = require("express");
const app = express();
require("dotenv").config();
const productRouter = require("./router/productRouter.js");
const mongoose = require("mongoose");

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log(`Connecté à MongoDB`);
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`App running on port ${process.env.SERVER_PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/product", productRouter);
