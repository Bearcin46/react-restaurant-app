import express from "express";
import restaurants from "./data/restaurantlist.json" assert { type: "json" };
import cors from "cors";

const server = express();
server.use(cors());
const SERVER_PORT = 3232;

server.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

server.listen(SERVER_PORT, () => {
  console.log("server is running in http://localhost:3232");
});
