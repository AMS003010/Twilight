import NavBar from './NavBar';
import React from 'react';

import background from '../img/bg.png';

class HomeContent extends React.Component {
    render() {
        const myStyle = {
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            minHeight: '100vh',
            fontSize: '30px',
        };
        
        return (
            <div className='homeContentContainer' style={myStyle}>
                <NavBar />
                <div className='content'>
                    Explore.<br /><br />
                    Enjoy.<br /><br />
                    Music.
                </div>
                <button className="button-17">
                    Listen now!
                </button>
            </div>
        );
    }
}

export default HomeContent;
