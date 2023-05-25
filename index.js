const express = require("express");
const dotenv = require("dotenv");
const { connect, hello } = require("./connect");
const UserName = require("./models/User");
var fs = require("fs");
var path = require("path");
dotenv.config();
var app = express();
app.use(express.json());
const create = require("./controllers/file");
connect();

if (!fs.existsSync(path.resolve(path.join(__dirname, "files")))) {
  fs.mkdirSync(path.join(__dirname, "files"));
}
//console.log(path.join(__dirname, "files"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/create", create);

app.get("/delete", (req, res) => {
  res.send("new route");
});
app.post("/", async (req, res) => {
  // const newUser = {
  //   username: "swathy",
  //   age: 27,
  // };
  try {
    const { username, age } = req.body;
    const saveduser = await UserName.create({ username, age });
    res.status(200).send(saveduser);
  } catch (err) {
    res.status(500).json(err);
  }

  //   try {
  //     const savedHall = await newHall.save();
  //     res.status(200).json(savedHall);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("listening to port 4000");
});

//const vs var vs let
//get
