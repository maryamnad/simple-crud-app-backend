const express = require("express");
const app = express();
// const Product= require('./models/product.model.js')
const productRoutes=require('./routes/product.route')

const mongoose = require("mongoose");


//we have to use middleware to pass or recieve json
app.use(express.json());
//to allow post in other formats eg. forms
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

//localhost get
app.get("/", (req, res) => {
  res.send("Hello from Node App updated");
});

//Node-API is collection and have multiple tables inside
mongoose
  .connect(
    "mongodb+srv://madmin:nadeem1234@learning.kpn0x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Learning"
  )
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("Noo!");
  });

  
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});