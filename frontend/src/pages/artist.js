import React, { useMemo } from 'react';
import Logo from '../components/logo';
import ArtistSong from '../components/artistSong';
import ArtistProfile from '../components/artistProfile';
import { useParams } from 'react-router-dom';

function ArtistInfo() {
    const { artistName } = useParams();

    const myStyle = useMemo(() => {
        return {
          backgroundColor: '#231C27',
          height: '100vh',
        };
      }, []);
    
    const songs = [
        { songId: 1, songName: "Song 1" },
        { songId: 2, songName: "Song 2" },
        { songId: 3, songName: "Song 3" },
        { songId: 4, songName: "Song 4" },
    ];

    const artists = [
        { artistId: 1, artistName: "Artist 1" },
        { artistId: 2, artistName: "Artist 2" },
        { artistId: 3, artistName: "Artist 3" },
        { artistId: 4, artistName: "Artist 4" }
    ];

    const selectedArtist = artists.find((artist) => artist.artistName );

    if (!selectedArtist) // Case where the artist is not found.
        return <div>Artist not found!</div>;

    return (
        <div style={myStyle}>
            <div>{ artistName }</div>
            <nav style={{ display: "flex" }}>
                <Logo />
            </nav>
            <div className='profileDiv'>
                <div className='profileColumn1'>
                    <div>
                        <h2 className="playlistHead">Tracks</h2>
                    </div>
                    <div>
                        <ul>
                            {songs.map((song) => (
                                <ArtistSong key={song.songId} songName={song.songName} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='profileColumn2'>
                    <div>
                        <h2 className="profileHead">Artist</h2>
                    </div>
                    <div>
                        <ArtistProfile artistName={selectedArtist.artistName} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArtistInfo;
