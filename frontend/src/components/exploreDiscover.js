import Carousel from "./exploreCarousel";
import TrendingSongs from "./trendingSongs";
import TopPlaylists from "./TopPlaylists";

const Discover = ({song,setSong}) => {
    return(
        <div className='exploreCarouselPageLayout'>
            <Carousel/>
            <h1 className="trendingSongsHeading">Trending</h1>
            <TrendingSongs song={song} setSong={setSong}/>
            <h1 className="topPlaylistsHeading">Top Playlists</h1>
            <TopPlaylists/>
        </div>
    )
}

export default Discover;