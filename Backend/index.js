const express = require("express");
const cors = require("cors");

const { connectDB } = require("./config/config");
require("dotenv").config();
const PORT = 3000 || process.env.PORT;

const user = require("./models/user");

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/create", async (req, res) => {
  const { name, email, password } = req.body;
  const User = new user({
    name,
    email,
    password,
  });
  const saveduser = await User.save();
  res.send("Created your account !");
});

app.get("/read", async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.json(allUsers);
  } catch (err) {
    
    res.status(500).json({ message: "Server error" });
  }
});

app.patch("/edit/:id", async (req, res) => {
  const { id } = req.params; 
  const { name, email, password } = req.body; 

  try {
    
    const updatedUser = await user.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true } 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedUser = await user.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
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
