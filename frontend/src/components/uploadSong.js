import React, { useState, useEffect } from "react";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";

function SongUpload() {
  const [imageInfo, setImageInfo] = useState({});

  useEffect(() => {
    const imagesListRef = ref(storage, "Images/SongImages");

    listAll(imagesListRef)
      .then((response) => {
        const imageInfo = {};
        const promises = response.items.map((item) =>
          getDownloadURL(item).then((url) => {
            imageInfo[item.name] = url;
          })
        );

        Promise.all(promises).then(() => {
          setImageInfo(imageInfo);
        });
      })
      .catch((error) => {
        console.error("Error fetching image info:", error);
      });
  }, []);

  return (
    <div className="App">

      {Object.keys(imageInfo).map((imageName) => (
        <div key={imageName}>
          <p>Image Name: {imageName}</p>
          <img src={imageInfo[imageName]} alt="k" style={{ width: "200px" }} />
        </div>
      ))}

    </div>
  );
  
}

export default SongUpload;
