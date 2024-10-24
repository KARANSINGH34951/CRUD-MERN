const express = require('express');
const { connectDB } = require('./config/config');
const PORT=3000 || import.meta.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

const startServer = async () => {
  try {
    await connectDB(); 
    app.listen(PORT, () => {
      console.log("Server running on port 3000...");
    });
  } catch (err) {
    console.log("Error occurred: ", err);
  }
};

startServer();
