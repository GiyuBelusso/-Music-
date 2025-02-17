import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
}); //copy the object and delete the id property

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj };
  delete newSongsObj.id;

  return newSongsObj;
}); //copy the object and delete the id property

const resArtist = await db.collection("artists").insertMany(newArtistArray);
const resSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(resArtist);
console.log(resSongs);
