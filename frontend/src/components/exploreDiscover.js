import Carousel from "./exploreCarousel";
import TrendingSongs from "./trendingSongs";
const Discover = () => {
    return(
        <div className='exploreCarouselPageLayout'>
            <Carousel/>
            <h1>Trending</h1>
            <TrendingSongs/>
        </div>
    )
}

export default Discover;