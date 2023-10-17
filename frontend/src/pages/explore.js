//import Carousel from "../components/exploreCarousel";
//import Discover from "../components/exploreDiscover";
//import Genre from "../components/exploreGenre";
import Artists from "../components/exploreArtists";
import ExploreLeftSidePanel from "../components/exploreLeftSidePanel";

const Explore = () => {
    const mystyle = {
        backgroundColor: '#342844',
        height: '100vh',
        display: 'flex'
    }
    return(
        <div style={mystyle}>
            <ExploreLeftSidePanel/>
            <Artists/>
        </div>
    )
}

export default  Explore;