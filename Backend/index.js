const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/config");
const dotenv=require("dotenv");
dotenv.config();

const user = require("./models/user");

const app = express();
const PORT = 3000 || process.env.PORT;

//routing import
const userRoutes = require("./routes/user");

//middleware for
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: "*",
}));

app.use("/user", userRoutes);

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
