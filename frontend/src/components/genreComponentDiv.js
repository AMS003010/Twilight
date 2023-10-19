const GenreComponentDiv = (props) => {
    const myStyle = {
        width: '300px',
        height: '300px',
        backgroundImage: `url('${props.image}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        margin: '20px',
        borderRadius: '20px',
        //mixBlendMode: 'screen',
        fontSize: '40px',
        fontFamily: 'Ubuntu',
        color: 'white',
        padding: '20px'
    }
    return(
        <div className='exploreArtistCardDiv' style={myStyle}>
            {props.name}
        </div>
    )
}

export default GenreComponentDiv;