import axios from "axios";

const URL = "http://localhost:5000";

const resArtist = await axios.get(`${URL}/artists`); //this is the same as the insertMany method
const resSongs = await axios.get(`${URL}/songs`);

export const artistArray = resArtist.data;
export const songsArray = resSongs.data;

console.log(artistArray);
