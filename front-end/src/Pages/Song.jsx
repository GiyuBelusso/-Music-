import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { name, artist, image, duration, audio } = songsArray.filter(
    // Destructure the song object from the songsArray
    (currentSongObj) => currentSongObj._id === id // Filter the songsArray to get the song object with the id that matches the id from the URL
  )[0];

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === artist // Filter the artistArray to get the artist object with the name that matches the artist name from the song object
  )[0];

  const songArrayObjFromArtist = songsArray.filter(
    (currentSongtObj) => currentSongtObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songArrayObjFromArtist.length - 1)
  );

  const randomIdFromArtist = songArrayObjFromArtist[randomIndex]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>
        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          audio={audio}
        />
        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
