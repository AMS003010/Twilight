import React, { useState, useEffect } from "react";

import heartEmpty from '../img/heartE.png';
import heartFull from '../img/heartF.png';

const TrendingSongs = ({song,setSong}) => {
    const [allSongs, setAllSongs] = useState(null);
    const [like,setLike] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            

            const response = await fetch('/api/song/random', {
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

    useEffect(() => {
        const fetchLikes = async () => {
        try {
            
            const user = JSON.parse(localStorage.getItem('user'))
            const userEmail = user.email;
            console.log(userEmail);
            const responseLiked = await fetch(`/api/user/email?email=${userEmail}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const likes =  await responseLiked.json();
            setLike(likes);
            console.log(like);
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };

        fetchLikes();
    }, []);

    const handleClick = (item) => {
        setSong(item);
    }

    return (
        <div className="trendingSongsWrapper">
            <div className="trendingSongsContainer">
            {like && allSongs && allSongs.data ? (
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
                    onClick={() => handleClick(item)}
                    ></div>
                    <div className='likeContiner' style={{display:'flex',justifyContent: 'space-between'}}>
                        <div>
                            <span className="nameSpan">{item.name}</span><br/>
                            <span className="artistSpan">{item.artist}</span>
                        </div>
                        <div style={{textAlign:'right'}}>
                            <img src={like && like.data.likedsongs.includes(item._id) ? heartFull : heartEmpty} alt="k" width='20px' height='20px'/>
                        </div>
                    </div>
                </div>
                ))
            ) : (
                <p>Loading....</p>
            )}
            </div>
        </div>
    );
};

export default TrendingSongs;