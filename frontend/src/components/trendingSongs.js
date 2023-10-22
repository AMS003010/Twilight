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
            console.log("Loaded trending songs successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className="trendingSongsWrapper">
            <div className="trendingSongsContainer">
            {allSongs && allSongs.data ? (
                allSongs.data.map((item) => (
                <div className="trendingSongsInnerDiv">
                    <div
                    style={{
                        backgroundImage: `url('${item.img}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        width: '200px',
                        height: '200px',
                        borderRadius: '20px'
                    }}
                    ></div>
                    <span className="nameSpan">{item.name}</span><br/>
                    <span className="artistSpan">{item.artist}</span>
                </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    );
};

export default TrendingSongs;
