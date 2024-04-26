import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { productRouter } from "./src/Routers/productRouter.js";

const app = express();

app.use(cors());
app.use(express.json());



app.use('/product', productRouter)



mongoose
  .connect("mongodb+srv://albinoni1423:xeshil@cluster0.wsbsjfu.mongodb.net/")
  .catch((err) => console.log(err));

app.listen(3000, () => {
  console.log("====================================");
  console.log("Server online!");
  console.log("====================================");
});
