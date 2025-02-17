//crud operations, create, read, update, delete
//Post, get, put, delete

import { db } from "./connect.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors()); //cross origin resource sharing middleware

app.get("/", (req, res) => {
  res.send("just working on /songs and /artists");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
