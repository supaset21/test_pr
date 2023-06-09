const express = require("express");

const app = express();

const port = 91000;

app.get("/", (req, res) => {
  res.send("Hello Ice");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
