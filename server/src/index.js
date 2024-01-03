import express from "express";
import { config } from "dotenv";
config();
import { mongoose } from "mongoose";
import morgan from "morgan";
import cors from "cors";
import blogPostRouter from "./routers/blogPost.js";
import { MongoError } from "mongodb";

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(console.log);

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", blogPostRouter);

//unkown endpoint
app.use((req, res, next) => {
  res.status(404).json({ error: "Unkown endpoint" });
});

//error handler
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "CastError") {
    return res.status(400).send({ error: "Invalid id" });
  }

  if (err.name === "ValidationError") {
    return res.status(400).send({ error: err.message });
  }

  if (err instanceof MongoError && err.code === 11000) {
    return res.status(422).send({ error: "Unique field already exists" });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(400).json({ error: err.message });
  }
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT ?? 3003;
app.listen(PORT, () => {
  console.log(`App running at port ${PORT}`);
});
