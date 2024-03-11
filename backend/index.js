import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { DB_URL, PORT } from "./config/apiConfig.js";
import booksRoute from "./routes/booksRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRoute);

mongoose
  .connect(process.env.DB_URL || DB_URL)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT || PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT || PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
