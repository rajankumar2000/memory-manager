import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
import postRoutes from "./routes/postRoutes.js";
import userRoutes from "./routes/userRoutes.js";

config({ path: "./development.env" });

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// routing
app.use("/post", postRoutes);
app.use("/user", userRoutes);

const dbURI = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const PORT = process.env.PORT || 8080;
mongoose
  .connect(dbURI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
