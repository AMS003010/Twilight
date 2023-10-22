import Carousel from "./exploreCarousel";
import TrendingSongs from "./trendingSongs";
const Discover = () => {
    return(
        <div className='exploreCarouselPageLayout'>
            <Carousel/>
            <h1 className="trendingSongsHeading">Trending</h1>
            <TrendingSongs/>
            <h1 className="trendingSongsHeading">Top Playlists</h1>
        </div>
    )
}

export default Discover;