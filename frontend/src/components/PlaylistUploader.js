import React, { useState } from 'react';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { storage } from '../firebase';

const PlaylistUploader = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [playlistData, setPlaylistData] = useState({
        name: '',
        user: '64fb2e3f83ea267c425abbdf',
        desc: 'Groove on',
        songs: [],
        img: ''
    });

    const handleImageFileChange = (e) => {
        const imageFile = e.target.files[0];

        const imageStorageRef = ref(storage, `Images/PlaylistsImages/${imageFile.name}`);
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
    
        playlistData.img = imageUrl;
    
        // Ensure that both song and image URLs are present
        if (!playlistData.img) {
          alert('Please select both a image file.');
          return;
        }
    
        const response = await fetch('/api/playlist',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(playlistData)
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
            <h1>Create a Playlist</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                Playlist Name:
                <input
                    type="text"
                    name="name"
                    value={playlistData.name}
                    onChange={(e) => {
                    setPlaylistData({ ...playlistData, name: e.target.value });
                    }}
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
                <h1>{imageUrl.toString()}</h1>
                <button type="submit">Create Song</button>
            </form>
        </div>
      );
}

export default PlaylistUploader;