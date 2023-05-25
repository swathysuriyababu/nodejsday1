const mongoose = require("mongoose");
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

module.exports = { connect };
