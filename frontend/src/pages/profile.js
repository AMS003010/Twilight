import React from 'react';
import Logo from '../components/logo';
import Playlist from '../components/playlist';
import ProfileInfo from '../components/profileInfo';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedUser: 1, // Initialize with the user you want to display
        };
    }

    changeUser = (userId) => {
        this.setState({ selectedUser: userId });
    };

    render() {
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        };

        const playlists = [
            { playlistId: 1, playlistName: "Playlist 1" },
            { playlistId: 2, playlistName: "Playlist 2" },
            { playlistId: 3, playlistName: "Playlist 3" },
            { playlistId: 4, playlistName: "Playlist 4" },
        ];

        const users = [
            { userId: 1, username: "User 1" },
            { userId: 2, username: "User 2" },
            { userId: 3, username: "User 3" },
            { userId: 4, username: "User 4" },
        ];

        const selectedUser = users.find((user) => user.userId === this.state.selectedUser);

        return (
            <div style={myStyle}>
                <nav style={{ display: "flex" }}>
                    <Logo />
                </nav>
                <div style={myStyle}>
                    <div className='profileDiv'>
                        <div className='profileColumn1'>
                            <div>
                                <h2 className="playlistHead">My Playlists</h2>
                            </div>
                            <div>
                                <ul>
                                {playlists.map((playlist) => (
                                    <Playlist key={playlist.playlistId} playlistName={playlist.playlistName} playlistId={playlist.playlistId} />
                                ))}
                                </ul>
                            </div>
                        </div>
                        <div className='profileColumn2'>
                            <div>
                                <h2 className="profileHead">My Profile</h2>
                            </div>
                            <div>
                            <ProfileInfo username={selectedUser.username} userId={selectedUser.userId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;