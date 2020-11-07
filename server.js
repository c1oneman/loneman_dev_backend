const express = require("express");

const DataRouter = require("./helpers/data-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({message: 'API is Online'})
  });

server.use("/api/", DataRouter);
module.exports = server;