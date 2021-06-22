const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());

require('./models/book');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connection.on('connected', () => {
  console.log("Mongoose is connected")
})

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactBooks", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});