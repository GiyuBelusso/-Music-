//crud operations, create, read, update, delete
//Post, get, put, delete

import { db } from "./connect.js";
import express from "express";
import cors from "cors";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 5000;

app.use(cors()); //cross origin resource sharing middleware

app.get("/api/", (req, res) => {
  res.send("just working on /songs and /artists");
});

app.get("/api/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.use(express.static(path.join(__dirname, "../front-end/dist")));

app.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
