import React, { useState, useEffect } from "react";

const TrendingSongs = () => {
  const [allSongs, setAllSongs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/song', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                console.log("Unable to load trending songs");
                return;
            }

            const data = await response.json();
            setAllSongs(data);
            console.log(allSongs.data);
            console.log("Loaded trending songs successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
  }, []);

  return (
    <div>
        {allSongs.data.map((item) => (
            <h1>{item.name}</h1>
        ))}
    </div>
  );
};

export default TrendingSongs;
