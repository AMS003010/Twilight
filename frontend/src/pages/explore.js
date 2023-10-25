import { useState } from "react";

import Discover from "../components/exploreDiscover";
import Genre from "../components/exploreGenre";
import Artists from "../components/exploreArtists";
import ExploreLeftSidePanel from "../components/exploreLeftSidePanel";
import Search from "../components/exploreSearch";
import MusicPlayer from "../components/musicPlayer";

const Explore = () => {
    const [elementState,setElementState] = useState(0);
    const [song,setSong] = useState(null);

    const elementList = [<Discover song={song} setSong={setSong}/>,<Genre song={song} setSong={setSong}/>,<Artists song={song} setSong={setSong}/>,<Search song={song} setSong={setSong}/>]

    const mystyle = {
        backgroundColor: '#342844',
        height: '100vh',
        display: 'flex'
    }
    return(
        <div style={mystyle}>
            <ExploreLeftSidePanel elementState={elementState} setElementState={setElementState}/>
            <MusicPlayer song={song} setSong={setSong}/>
            {elementList[elementState]}
        </div>
    )
}

export default  Explore;