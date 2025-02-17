import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useState } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`; // Return the time in the format `minutes:seconds`
};
const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":"); // Split the time string by the colon
  const minutes = Number(splitArray[0]); // Get the minutes
  const seconds = Number(splitArray[1]); // Get the seconds

  return minutes * 60 + seconds; // Return the time in seconds
};

const Player = ({ duration, randomIdFromArtist, audio }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0)); // Set the current time to 0
  const durationInSeconds = timeInSeconds(duration); // Convert the duration to seconds

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play(); // if isPlaying is true, pause the song, if it's false, play the song

    setIsPlaying(!isPlaying); // change the value of isPlaying to the opposite value
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); // Set the current time to the current time of the audio player

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      ); // Set the width of the progress bar to the percentage of the current time of the audio player over the duration
    }, 1000); // Run this function every second

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, [isPlaying]); // Run this effect only when isPlaying changes

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon  " icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={playPause}
        />
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon " icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{`${duration}`}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
