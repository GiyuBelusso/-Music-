import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  const [items, setItems] = useState(5); // Create a state variable to store the number of items to display
  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} key={index} index={index} /> // Spread the currentSongObj object and pass the index as a prop
        ))}

      <p className="song-list__see-more" onClick={() => setItems(items + 5)}>
        {" "}
        {/* Increase the number of items to display by 5 when the user clicks */}
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
