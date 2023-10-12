import { Link } from "react-router-dom";
import React from "react";

import playlistImage1 from "../img/playlistImage1.png"
import playlistImage2 from "../img/playlistImage2.png"
import playlistImage3 from "../img/playlistImage3.png"
import playlistImage4 from "../img/playlistImage4.png"

const Playlist = (props) => {
    
    const playlistImages = {
        "Playlist 1": playlistImage1,
        "Playlist 2": playlistImage2,
        "Playlist 3": playlistImage3,
        "Playlist 4": playlistImage4
    };

    const playlistSongs ={
        "Playlist 1": 19,
        "Playlist 2": 13,
        "Playlist 3": 23,
        "Playlist 4": 29
    };

    return (
        <Link to={'/info'} className="playlistLink">
            <div className='playlistContainer'>
                <div className='playlistLogo'>
                    <img src={playlistImages[props.playlistName]} alt={props.playlistName} />
                </div>
                <div className='playlistInfo'>
                    <h5 className='playlistName'>{props.playlistName}</h5>
                    <h6 className='playlistSongsTime'>{playlistSongs[props.playlistName]} tracks</h6>
                </div>
            </div>
        </Link>
    )
}

export default Playlist;
