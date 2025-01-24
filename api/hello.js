const express = require("express");

const server = express();

server.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API!" });
});

export default server;
