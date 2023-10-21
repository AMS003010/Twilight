import React, { useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { storage } from '../firebase';

const CreateSong = () => {
  const [songUrl, setSongUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [songData, setSongData] = useState({
    name: '',
    artist: '',
    song: '',
    img: '',
    duration: '',
  });

  const handleSongFileChange = (e) => {
    const songFile = e.target.files[0];
    if (songFile) {
      // Automatically fetch duration from the uploaded song file (if supported)
      const audio = new Audio(URL.createObjectURL(songFile));
      audio.onloadedmetadata = () => {
        setSongData({
          ...songData,
          song: URL.createObjectURL(songFile), // Store the song URL
          duration: audio.duration.toFixed(2), // Assuming you want a fixed two decimal places for duration
        });
      };

      // Upload the song file to Firebase Storage
      const songStorageRef = ref(storage, `Songs/${songFile.name}`);
      uploadBytes(songStorageRef, songFile)
        .then(() => {
          getDownloadURL(songStorageRef)
            .then((url) => {
              setSongUrl(url);
            })
            .catch((error) => {
              console.error('Error getting download URL for song:', error);
            });
        })
        .catch((error) => {
          console.error('Error uploading song:', error);
        });
    }
  };

  const handleImageFileChange = (e) => {
    const imageFile = e.target.files[0];

    // Upload the image file to Firebase Storage
    const imageStorageRef = ref(storage, `Images/SongImages/${imageFile.name}`);
    uploadBytes(imageStorageRef, imageFile)
      .then(() => {
        getDownloadURL(imageStorageRef)
          .then((url) => {
            setImageUrl(url);
          })
          .catch((error) => {
            console.error('Error getting download URL for image:', error);
          });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    songData.song = songUrl;
    songData.img = imageUrl;

    // Ensure that both song and image URLs are present
    if (!songData.song || !songData.img) {
      alert('Please select both a song file and an image file.');
      return;
    }

    const response = await fetch('/api/song',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(songData)
    })
    const json = await response.json()
    console.log(json)
    if(!response.ok){
        console.log("Failed");
    } 
    if(response.ok){
        console.log("Upload SUCCESSFUL");
    }
  };

  return (
    <div>
      <h1>Create a Song</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Song Name:
          <input
            type="text"
            name="name"
            value={songData.name}
            onChange={(e) => {
              setSongData({ ...songData, name: e.target.value });
            }}
          />
        </label>
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={songData.artist}
            onChange={(e) => {
              setSongData({ ...songData, artist: e.target.value });
            }}
          />
        </label>
        <label>
          Song File:
          <input
            type="file"
            name="songFile"
            accept=".mp3, .wav"
            onChange={handleSongFileChange}
          />
        </label>
        <label>
          Image File:
          <input
            type="file"
            name="imageFile"
            accept="image/*"
            onChange={handleImageFileChange}
          />
        </label>
        <label>
          Duration:
          <input
            type="text"
            name="duration"
            value={songData.duration}
            onChange={(e) => {
              setSongData({ ...songData, duration: e.target.value });
            }}
          />
        </label>
        <h1>{imageUrl.toString() + '   ' + songUrl.toString()}</h1>
        <button type="submit">Create Song</button>
      </form>
    </div>
  );
};

export default CreateSong;
