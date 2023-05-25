var fs = require("fs");
var path = require("path");

var create = (req, res) => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() +
    "hours" +
    today.getMinutes() +
    "minutes" +
    today.getSeconds();
  var date = date + " " + time;
  console.log(today);
  console.log(filepath);
  var filename = `${date}.txt`;

  var filepath = path.resolve(path.join("files", filename));
  fs.writeFile(filepath, date, (err) => {
    console.log(err);
  });
  res.send(`${filename} created successfully`);
};

module.exports = create;
