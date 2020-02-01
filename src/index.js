require("dotenv").config({ path: ".env" });
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const connectMongoose = process.env.MONGO_URI;
mongoose.connect(connectMongoose, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3330);
