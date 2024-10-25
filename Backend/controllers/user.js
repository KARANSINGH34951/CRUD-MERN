const user = require("../models/user");


const createuser = async (req, res) => {
  const { name, email, password } = req.body;
  const User = new user({
    name,
    email,
    password,
  });
  const saveduser = await User.save();
  res.send("Created your account !");
};

const readuser=async (req, res) => {
  try {
    const allUsers = await user.find({});
    res.json(allUsers);
  } catch (err) {
    
    res.status(500).json({ message: "Server error" });
  }
}

const edituser=async (req, res) => {
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
}

const deleteuser=async (req, res) => {
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
}

module.exports = { createuser, readuser, edituser, deleteuser };