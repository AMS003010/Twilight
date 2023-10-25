const MusicPlayer = ({song,setSong}) => {
    return(
        <div>        
            {song ? (
            <div className='musicPlayerContainer'>
                <audio src={song.song} controls autoPlay></audio>
            </div>
        ) : (<p></p>)}
        </div>
    )
}

export default MusicPlayer;