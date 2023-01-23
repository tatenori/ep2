var express = require("express");

var app = express();
app.get("/", (req, res) => {
  res.status(200).send("Express!!");
});

app.get("/api/objectdata", function(req, res, next) {
    console.log("呼び出された")
    res.status(200).send("objectdata");
  });

// ポート3000番でlistenする
app.listen(3000);