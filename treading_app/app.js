const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require('cors')
const homeroute = require("./routes/home");
const postroute = require("./routes/Post");
const feedroute = require('./routes/feed')
const adminroute = require('./routes/admin/userlist')
require('dotenv').config()
//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors());
app.use("/", homeroute);

app.use("/api", postroute);
app.use('/feed', feedroute)
app.use('/admin', adminroute)

app.get("/about", (req, res) => {
  res.send("<h1>Fuck you</h1>");
});

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect("mongodb://localhost:27017/trade", options, () => {
  console.log("connected to database");
});

app.listen(3000);
