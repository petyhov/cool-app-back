const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
let server;

start();

function start() {
  initServer();
  initMiddlewares();
  initRoutes();
  connectDatabase();
  listen();
}

function initServer() {
  server = express();
}

function initMiddlewares() {
  server.use(express.json());
}

function initRoutes() {
  server.use("/", (res, req) => {
    req.status(201).json("All works fine)");
  });
}

async function connectDatabase(req, res) {}

function listen() {
  server.listen(PORT, () => {
    console.log("Server is listening on port: ", PORT);
  });
}
