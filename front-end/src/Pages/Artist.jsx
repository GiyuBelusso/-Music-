import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  const artistObj = artistArray.filter(
    // Filter the artistArray to get the artist object with the id that matches the id from the URL
    (currentArtistObj) => currentArtistObj._id === id
  )[0];

  const songArrayObjFromArtist = songsArray.filter(
    (currentSongtObj) => currentSongtObj.artist === artistObj.name // Filter the songsArray to get the songs object with the artist that matches the artist name
  );

  const randomIndex = Math.floor(
    Math.random() * (songArrayObjFromArtist.length - 1)
  ); // Get a random number between 0 and the length of the songArrayObjFromArtist array

  const randomIdFromArtist = songArrayObjFromArtist[randomIndex]._id; // Get the id of the song object from the songArrayObjFromArtist array with the index that matches the randomIndex

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artistObj.banner})`,
        }}
      >
        <div className="artist__title">
          <h2>{artistObj.name}</h2>
        </div>
      </div>
      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songArrayObjFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        {" "}
        {/* Link to the song page with the randomIdFromArtist */}
        <FontAwesomeIcon
          className="single-item__icon single-item__icon--artist"
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
