import React, { useState, useEffect } from "react";

const TopPlaylists = () => {
    const [randomPlaylists,setRandomPlaylists] =  useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('/api/playlist/random', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (!response.ok) {
                console.log("Unable to load trending songs");
                return;
            }

            const data = await response.json();
            setRandomPlaylists(data);
            console.log("Loaded trending songs successfully");
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchData();
    }, []);

    return(
        <div className="trendingSongsWrapper">
            <div className="trendingSongsContainer">
            {randomPlaylists && randomPlaylists.data ? (
                randomPlaylists.data.map((item) => (
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
                </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
}

export default TopPlaylists;