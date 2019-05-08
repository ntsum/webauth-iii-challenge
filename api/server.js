const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const db = require("../data/dbConfig.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send("WE ARE RUNNNNNING!");
});

module.exports = server;
