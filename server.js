const express = require("express");

const DataRouter = require("./helpers/data-router.js");

const server = express();

server.use(express.json());
server.use("/api/", DataRouter);

module.exports = server;