import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import studentRouter from "./routes/students.js";

const app = express();

//process.env.PORT-----> if 8070 is not available ? used any available port to run the server
const PORT = process.env.PORT || 8070;

//cors--> cross-origin resource sharing
app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

//const studentRouter = require("./routes/students.js");

//http://localhost:8070/studnts
app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is up and Running on port Number ${PORT}`);
});

