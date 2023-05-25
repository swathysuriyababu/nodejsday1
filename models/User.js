const mongoose = require("mongoose");
//const { Schema } = mongoose;
mongoose.pluralize(null);

const User = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
const UserName = mongoose.model("swetha", User);

module.exports = UserName;
