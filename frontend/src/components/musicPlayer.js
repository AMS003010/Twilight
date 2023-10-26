import { useState, useEffect } from "react";

import playIcon from '../img/play.png'
import pauseIcon from '../img/pause.png'
import soundIcon from '../img/sound.png'

const MusicPlayer = ({ song, setSong }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Add a useEffect that listens for changes in the 'song' state
  useEffect(() => {
    if (song) {
      audio.src = song.song;

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadeddata", handleLoadedData);
      audio.volume = volume;

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadeddata", handleLoadedData);
    };
  }, [song, isPlaying, volume]);

  // Use this useEffect to set 'isPlaying' to true when 'song' changes
  useEffect(() => {
    setIsPlaying(true);
  }, [song]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(audio.duration);
  };

  const handleSliderChange = (e) => {
    setCurrentTime(e.target.value);
    audio.currentTime = e.target.value;
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audio.volume = e.target.value;
  };

  return (
    <div>
      {song ? (
        <div className="musicPlayerContainer" style={{ display: "flex" }}>
          <audio controls id="audio-element" hidden autoPlay></audio>
          <div style={{backgroundImage:`url('${song.img}')`}} className="muPlayPic"></div>
          <div className="muPlName">
            <div style={{fontWeight:'600'}}>{song.name}</div>
            <div style={{fontWeight:'500'}}>{song.artist}</div>
          </div>
          <button onClick={togglePlayPause} style={{backgroundImage:`url('${isPlaying ? pauseIcon : playIcon}')`}} className="muPlayBut">
          </button>
          <div style={{width:'30px',marginRight:'25px'}}>{formatTime(currentTime)}</div>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
            style={{marginRight:'20px',width:'300px'}}
          />
          <div>{formatTime(duration)}</div>
          <img src={soundIcon} alt="k" style={{width:'25px',marginLeft:'220px',marginRight:'10px'}}  />
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default MusicPlayer;

// Function to format time in HH:MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

// Left part of the currentTime span is moving as the numbers change