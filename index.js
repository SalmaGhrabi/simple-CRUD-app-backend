const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./Routes/Product.routes.js");
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API updated");
});

mongoose
  .connect(
    "mongodb+srv://salmaghrabi:mongodbpassword@firstbdb.5w5e4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=FirstBDB"
  )
  .then(() => {
    console.log("Connected!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed !");
  });
