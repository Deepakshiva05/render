const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const RenderUser = require('./models/RenderSchema'); // Corrected path
const port = '5173';
const mongo_url = 'mongodb+srv://mongomern:mongopass@cluster0.laoawkm.mongodb.net/?appName=Cluster0';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

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
