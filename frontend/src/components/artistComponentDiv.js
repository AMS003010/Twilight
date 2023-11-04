import { Link } from 'react-router-dom'

import blueTick from '../img/blueTick.png'

const ArtistCompDiv = (props) => {
    const divStyle = {
        backgroundImage: `url('${props.image}')`,
        width: '50rem',
        height: '20rem',
        borderRadius: '20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        marginBottom: '30px',
        marginLeft: '40px',
    }
    return(
        <div className='exploreArtistCard' style={divStyle}>
            <Link to={`/artist/${props.name}`} style={{textDecoration:'none'}}>
                <div className='exploreArtistsDiv1'>
                    <span>{props.name}</span>
                    <img src={blueTick} alt='img'/>
                </div>
                <div className='exploreArtistsDiv2'>
                    <span className='exploreArtistsSpan1'>{props.listeners}</span>
                    <span className='exploreArtistsSpan2'>&nbsp;monthly listeners</span>
                </div>
            </Link>
        </div>
    )
}

export default ArtistCompDiv;