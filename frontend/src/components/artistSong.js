import React from "react";
import artistSongImg1 from "../img/artistSongImg1.png";
import artistSongImg2 from "../img/artistSongImg2.png";
import artistSongImg3 from "../img/artistSongImg3.png";
import artistSongImg4 from "../img/artistSongImg4.png";

const artistSongImgs = {
    "Song 1": artistSongImg1,
    "Song 2": artistSongImg2,
    "Song 3": artistSongImg3,
    "Song 4": artistSongImg4,
};

function ArtistSong(props) {
    return (
        <div className='artistSongContainer'>
            <div className='artistSongLogo'>
                <img src={artistSongImgs[props.songName]} alt={props.songName} />
            </div>
            <div className='artistSongInfo'>
                <h5 className='artistSongName'>{props.songName}</h5>
            </div>
        </div>
    );
}

export default ArtistSong;
