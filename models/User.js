const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  credits: {
    type: Number,
    default: 0
  },
  googleId: String,
  name: String
});

mongoose.model("users", userSchema);
