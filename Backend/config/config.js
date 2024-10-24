const mongoose = require('mongoose');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_API);
    console.log("connected..");
  } catch (err) {
    console.log("Error occurred while connecting to MongoDB Atlas: ", err);
    throw err;
  }
};

module.exports = { connectDB };
