import { useState } from 'react';

import searchIcon from '../img/searchBar.png';
import emptyBox from '../img/emptyBox.png';

const Search = ({song,setSong}) => {
    const [query, setQuery] = useState("");
    const [songs, setSongs] = useState(null);
    const [playlists, setPlaylists] = useState(null);

    const handleClick = async () => {
        const response = await fetch(`/api/search?search=${query}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
            console.log("Unable to load search results");
            return;
        }

        const data = await response.json();
        setSongs(data.songs);
        setPlaylists(data.playlists);
    };

    const handleSongChange = (item) => {
        setSong(item);
    }

    return (
        <div className="searchContainer">
            <div className='searchWrapper'>
                <div className='searchBarContainer'>
                    <form>
                        <input
                            className="searchBar"
                            placeholder="Search"
                            onChange={(e) => { setQuery(e.target.value) }}
                        />
                    </form>
                    <img
                        src={searchIcon} alt='k'
                        className='searchicon'
                        onClick={handleClick}
                    />
                </div>
            </div>
            <div className='searchResultsWrapper'>
                <div className='searchResultsContainer'>
                    {(!songs || songs.length === 0) && (!playlists || playlists.length === 0) ? (
                        <div style={{ color: 'white',fontFamily: 'Inter',fontSize:'30px',alignItems:'center',textAlign:'center'}}>
                            <img src={emptyBox} alt='emp' style={{width:'80px',marginTop:'45%'}}/>
                            <div>No Results</div>
                        </div>
                    ) : (
                        <div>
                            {songs ? (
                                songs.map((s) => (
                                    <div className='searchBox'>
                                        <div className='searchImg' style={{ backgroundImage: `url('${s.img}')` }} onClick={() => handleSongChange(s)}></div>
                                        <div>
                                            <span style={{ color: 'white' }}>Song</span><br />
                                            <span style={{ color: 'rgb(126, 126, 126)' }}>{s.name}</span><br />
                                            <span style={{ color: 'rgb(126, 126, 126)' }}>{s.artist}</span>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                            {playlists ? (
                                playlists.map((p) => (
                                    <div className='searchBox'>
                                        <div className='searchImg' style={{ backgroundImage: `url('${p.img}')` }}></div>
                                        <div>
                                            <span style={{ color: 'white' }}>Playlist</span><br />
                                            <span style={{ color: 'rgb(126, 126, 126)' }}>{p.name}</span>
                                        </div>
                                    </div>
                                ))
                            ) : null}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Search;

//When the result for a search gives no songs and no playlists, it is not displaying not found
