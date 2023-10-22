import Carousel from "./exploreCarousel";
import TrendingSongs from "./trendingSongs";
import TopPlaylists from "./TopPlaylists";

const Discover = () => {
    return(
        <div className='exploreCarouselPageLayout'>
            <Carousel/>
            <h1 className="trendingSongsHeading">Trending</h1>
            <TrendingSongs/>
            <h1 className="topPlaylistsHeading">Top Playlists</h1>
            <TopPlaylists/>
        </div>
    )
}

export default Discover;