import Logo from '../components/logo';

import discoverIcon from '../img/discover.png'
import genreIcon from '../img/genre.png'
import artistIcon from '../img/artist.png'
import searchIcon from '../img/search.png'

const ExploreLeftSidePanel = () => {
    return(
        <div className='exploreLeftSideBar'>
            <div className='exploreLogoContainer'>
                <Logo/>
            </div>
            <div className='exploreCenter'>
                <div className='leftPanelComp' style={{color:'yellow'}}>
                    <img src={discoverIcon} alt='img'/>
                    Discover
                </div>
                <div className='leftPanelComp'>
                    <img src={genreIcon} alt='img'/>
                    Genre
                </div>
                <div className='leftPanelComp'>
                    <img src={artistIcon} alt='img'/>
                    Artists
                </div>
                <div className='leftPanelComp'>
                    <img src={searchIcon} alt='img'/>
                    Search
                </div>
                <div className='leftPaneUserComp'>
                    <div className='exploreUserProfile'></div>
                    Username
                </div>
            </div>
        </div>
    )
}

export default ExploreLeftSidePanel;