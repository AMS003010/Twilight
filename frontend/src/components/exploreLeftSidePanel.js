import { useState } from 'react';

import Logo from '../components/logo';

import discoverIcon from '../img/discover.png'
import genreIcon from '../img/genre.png'
import artistIcon from '../img/artist.png'
import searchIcon from '../img/search.png'

const ExploreLeftSidePanel = ({ elementState, setElementState }) => {
    const [selectedElement, setSelectedElement] = useState(0);

    const handleElementClick = (index) => {
        setSelectedElement(index);
        setElementState(index);
    };

    const isElementSelected = (index) => {
        return selectedElement === index;
    };

    return (
        <div className='exploreLeftSideBar'>
            <div className='exploreLogoContainer'>
                <Logo/>
            </div>
            <div className='exploreCenter'>
                <div
                    className={`leftPanelComp ${isElementSelected(0) ? 'selected' : ''}`}
                    onClick={() => handleElementClick(0)}
                >
                    <img src={discoverIcon} alt='img'/>
                    Discover
                </div>
                <div
                    className={`leftPanelComp ${isElementSelected(1) ? 'selected' : ''}`}
                    onClick={() => handleElementClick(1)}
                >
                    <img src={genreIcon} alt='img'/>
                    Genre
                </div>
                <div
                    className={`leftPanelComp ${isElementSelected(2) ? 'selected' : ''}`}
                    onClick={() => handleElementClick(2)}
                >
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
