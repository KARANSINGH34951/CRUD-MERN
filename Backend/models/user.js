const mongoose = require('mongoose');
const { Schema } = mongoose;

const Userschema= new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
   
  },
  password: {
    type: String,
    required: true,
  },
})

const user= mongoose.model('user', Userschema);
module.exports = user;
