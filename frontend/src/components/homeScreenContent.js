import NavBar from './NavBar';
import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to='/intro'>
                    <button className="button-17">
                        Listen now!
                    </button>
                </Link>
            </div>
        );
    }
}

export default HomeContent;
