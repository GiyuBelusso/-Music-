import axios from "axios";
import "dotenv/config";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === "development" ? "http://localhost:5000/api" : "/api";

const resArtist = await axios.get(`${URL}/artists`); //this is the same as the insertMany method
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtist.data;
export const songsArray = resSongs.data;

console.log(artistArray);
