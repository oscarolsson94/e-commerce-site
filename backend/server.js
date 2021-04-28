import express from "express";
import mongoose from "mongoose";
import { data } from "./data.js";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect("mongodb://localhost/ecommerce", {
  //mongodb connection string - change to live DB later
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
//get all products
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
//get one product
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
