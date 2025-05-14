// const express = require('express');        (it's a common js)
import express from "express"; //#(ES Modules)Inorder to do this u need to add "type": "module", in package.json

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World 123");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
