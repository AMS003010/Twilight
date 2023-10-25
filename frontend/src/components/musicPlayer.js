import { useState, useEffect } from "react";

const MusicPlayer = ({ song, setSong }) => {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

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
          <audio controls id="audio-element" hidden></audio>
          <button onClick={togglePlayPause}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSliderChange}
          />
          <span>{formatTime(currentTime)}</span> / {formatTime(duration)}
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
