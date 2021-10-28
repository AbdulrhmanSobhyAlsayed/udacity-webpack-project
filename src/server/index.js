var path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
var FormData = require("form-data");
var fs = require("fs");

dotenv.config();

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/test", function (req, res) {
  var data = new FormData();
  data.append("key", process.env.API_KEY);
  data.append("text", req.body.text);
  data.submit(
    "https://api.meaningcloud.com/lang-4.0/identification",
    function (err, resp) {
      resp.on("data", (chunk) => {
        return res
          .status(200)
          .json({ text: JSON.parse(chunk).language_list[0]["name"] });
      });
    }
  );
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
