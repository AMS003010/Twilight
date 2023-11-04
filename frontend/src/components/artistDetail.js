import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Logo from './logo';
import artistBg from '../img/artistBg.jpg';

const ArtistDetail = (props) => {
    const { name } = useParams();
    const [songs, setSongs] = useState(null);

    const mystyle = {
        height: '100vh',
    };

    const divStyle = {
        color: 'white',
        textAlign: 'left',
        fontFamily: 'Michroma',
        fontSize:'50px',
        paddingLeft:'50px',
        paddingTop:'50px'
    }

    const bgStyle = {
        backgroundImage: `url('${artistBg}')`,
        border: '5px solid yellow',
        borderRadius: '55px',
        width: '40%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        marginLeft:'7%',
        mixBlendMode:'screen'
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/song/', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });
                const data = await response.json(); // Note the 'await' here
                const data1 = data.data.filter((ele) => ele.artist === name);
                setSongs(data1);
                console.log(data1); // Log the data, not 'songs'
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={mystyle}>
            <Logo />
            <h1 style={divStyle}>{name}</h1>
            <div style={{display:'flex'}}> 
                <div className='searchResultsWrapper' style={{marginLeft:'50px',height:'50%'}}>
                    <div className='searchResultsContainer'>
                        {songs  ? ( // Check if songs and songs.data are not null
                            songs.map((s) => (
                                <div className='searchBox' key={s._id}> {/* Add a 'key' prop for mapping */}
                                    <div className='searchImg' style={{ backgroundImage: `url('${s.img}')` }}></div>
                                    <div>
                                        <span style={{ color: 'white' }}>Song</span><br />
                                        <span style={{ color: 'rgb(126, 126, 126)' }}>{s.name}</span><br />
                                        <span style={{ color: 'rgb(126, 126, 126)' }}>{s.artist}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
                <div style={bgStyle}>
                </div>
            </div>
        </div>
    );
};

export default ArtistDetail;
