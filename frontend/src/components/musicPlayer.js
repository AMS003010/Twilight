import React, { useState, useEffect, useRef } from "react";
import playIcon from "../img/play.png";
import pauseIcon from "../img/pause.png";
import soundIcon from "../img/sound.png";
import muteIcon from "../img/mute.png";
import next from "../img/next.png";
import prev from "../img/prev.png";

const MusicPlayer = ({ song, setSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [soundImage, setSoundImage] = useState(soundIcon);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
    setIsLoaded(true);
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const handleSliderChange = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleSoundImage = () => {
    if (volume === 0) {
      setSoundImage(soundIcon);
      setVolume(1);
    } else {
      setSoundImage(muteIcon);
      setVolume(0);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("ended", handleEnded);
      if (isLoaded && !isPlaying) {
        audio.play();
        setIsPlaying(true);
      }
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("ended", handleEnded);
      };
    }
  }, [isLoaded, isPlaying]);

  return (
    <div>
      {song ? (
        <div className="musicPlayerContainer" style={{ display: "flex" }}>
          <div
            style={{ backgroundImage: `url('${song.img}')` }}
            className="muPlayPic"
          ></div>
          <div className="muPlName">
            <div style={{ fontWeight: "600", letterSpacing: "0.65px", width: "200px" }}>
              {song.name}
            </div>
            <div style={{ fontWeight: "500", letterSpacing: "0.65px", width: "200px" }}>
              {song.artist}
            </div>
          </div>
          <audio
            ref={audioRef}
            controls
            src={song.song}
            id="audioEle"
            style={{ visibility: "hidden" }}
          ></audio>
          <div style={{ objectPosition: "center", textAlign: "center", alignItems: "center", marginLeft: "50px" }}>
            <div style={{ display: "flex", objectPosition: "center", textAlign: "center", alignItems: "center", marginLeft: "195px" }}>
              <button style={{ backgroundImage: `url('${prev}')` }} className="muPlayIco"></button>
              <button onClick={() => setIsLoaded(true)} style={{ backgroundImage: `url('${isPlaying ? pauseIcon : playIcon}')` }} className="muPlayBut"></button>
              <button style={{ backgroundImage: `url('${next}')` }} className="muPlayIco"></button>
            </div>
            <div style={{ display: "flex", objectPosition: "center", textAlign: "center", alignItems: "center", marginLeft: "50px" }}>
              <div style={{ width: "30px", marginRight: "25px" }}>{formatTime(currentTime)}</div>
              <input
                type="range"
                value={currentTime}
                max={duration}
                onChange={handleSliderChange}
                style={{ marginRight: "20px", width: "300px" }}
              />
              <div>{formatTime(duration)}</div>
            </div>
          </div>
          <img src={soundImage} alt="k" style={{ width: "25px", marginLeft: "120px", marginRight: "10px" }} onClick={() => handleSoundImage()} />
          <input
            type="range"
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
          />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  return formattedTime;
}

export default MusicPlayer;
