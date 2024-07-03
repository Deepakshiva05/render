const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RenderUser = require('./modals/RenderSchema');
require("dotenv").config();
const port = '8000';
const mongo_url =process.env.mongo_url;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery',false)

mongoose.connect(mongo_url,{useNewUrlParser: true, useUnifiedTopology: true}).then(console.log("db connected sucessfully"))


 

app.post('/contact', async (req, res) => {
  const { name, email } = req.body;

  const logData = new RenderUser({
    name: name,
    email: email
  });

  try {
    await logData.save();
    res.send("Data inserted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
