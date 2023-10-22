import { useState } from "react";

import Discover from "../components/exploreDiscover";
import Genre from "../components/exploreGenre";
import Artists from "../components/exploreArtists";
import ExploreLeftSidePanel from "../components/exploreLeftSidePanel";
import Search from "../components/exploreSearch";

const Explore = () => {
    const [elementState,setElementState] = useState(0);

    const elementList = [<Discover/>,<Genre/>,<Artists/>,<Search/>]

    const mystyle = {
        backgroundColor: '#342844',
        height: '100vh',
        display: 'flex'
    }
    return(
        <div style={mystyle}>
            <ExploreLeftSidePanel elementState={elementState} setElementState={setElementState}/>
            {elementList[elementState]}
        </div>
    )
}

export default  Explore;