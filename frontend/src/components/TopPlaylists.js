import React, { useState, useEffect } from "react";

import deleteImage from '../img/delete.png';

const TopPlaylists = () => {
    const [randomPlaylists,setRandomPlaylists] =  useState(null);
    const [isAdmin,setIsAdmin] = useState(false);

    const handleDelete = async (id) => {
        const response = await fetch(`/api/playlist/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });

        if (!response.ok) {
            console.log("Unable to delete playlist");
            return;
        }
        const data = await response.json();
        setRandomPlaylists(data);
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        const fetchData = async () => {
        try {
            const response = await fetch('/api/playlist', {
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
        if(user.email === "abhi@gmail.com"){
            setIsAdmin(true);
        }
    }, []);

    return(
        <div className="trendingSongsWrapper">
            <div className="trendingSongsContainer">
            {randomPlaylists && randomPlaylists.data ? (
                randomPlaylists.data.map((item) => (
                <div className="trendingSongsInnerDiv">
                    <div
                    className="imgContainer"
                    style={{
                        backgroundImage: `url('${item.img}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        width: '200px',
                        height: '200px',
                        borderRadius: '20px',
                        marginBottom:'10px',
                    }}
                    ></div>
                    <div style={{justifyContent:'space-between',alignItems:'center',display:'flex'}}>
                        <div className="nameSpan">{item.name}</div>
                        {isAdmin ? <img src={deleteImage} className="deleteImg" alt="k" width='20px' onClick={() => {handleDelete(item._id)}}/> : <div></div>}
                    </div>                    
                </div>
                ))
            ) : (
                <p>Loading....</p>
            )}
            </div>
        </div>
    )
}

export default TopPlaylists;