const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/crudmern");
    console.log("Database connected..");
  } catch (err) {
    console.log("Error occurred while connecting to the database: ", err);
    throw err;
  }
};

module.exports = { connectDB }; 
