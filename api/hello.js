const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

server.get("/test", (req, res) => {
  res.json({
    message: "This is a test message from Express API!",
  });
});

module.exports = server;
