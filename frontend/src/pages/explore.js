import Carousel from '../components/exploreCarousel'
import ExploreLeftSidePanel from "../components/exploreLeftSidePanel";

const Explore = () => {
    const mystyle = {
        backgroundColor: '#342844',
        height: '100vh',
        display: 'flex'
    }
    return(
        <div  style={mystyle}>
            <ExploreLeftSidePanel/>
            <div className='exploreRightSideBar'>
                <Carousel/>
            </div>
        </div>
    )
}

export default  Explore;