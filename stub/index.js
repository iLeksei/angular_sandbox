const express = require("express");
const bodyParser = require("body-parser");
const ip = require("ip");
// const os = require("os");
// const fs = require('fs');
// const https = require('https');

const DEFAULT_PORT = 3001;

const api = express();
const PORT = process.env.STUB_PORT || DEFAULT_PORT;

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));
// api.use(express.static(__dirname + "/public"))

api.get("/health-check", (req, res) => {
  const instanceHost = ip.address() + ":" +PORT;
  res.status(200).send(instanceHost + " is alive");
})

api.listen(PORT, () => {
   console.info(`stub-server has started on: ${PORT} port`);
});
