
import { Link } from "react-router-dom";
import React from "react";

import playlistImage1 from "../img/artistSongImg1.png"
import playlistImage2 from "../img/artistSongImg2.png"
import playlistImage3 from "../img/artistSongImg3.png"
import playlistImage4 from "../img/artistSongImg4.png"

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

class Playlist extends React.Component {
    render(){
        return (
            <Link to={'/info'} className="playlistLink">
                <div className='playlistContainer'>
                    <div className='playlistLogo'>
                        <img src={playlistImages[this.props.playlistName]} alt={this.props.playlistName} />
                    </div>
                    <div className='playlistInfo'>
                        <h5 className='playlistName'>{this.props.playlistName}</h5>
                        <h6 className='playlistSongsTime'>{playlistSongs[this.props.playlistName]} tracks</h6>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Playlist;
