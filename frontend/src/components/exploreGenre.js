import GenreComponentDiv from "./genreComponentDiv";

import hipHopMusic from '../img/hipHopMusic.jpg'
import rockMusic from '../img/rockMusic.jpg'
import countryMusic from '../img/countryMusic.jpg'
import popMusic from '../img/popMusic.jpg'
import jazzMusic from '../img/jazzMusic.jpg'
import technoMusic from '../img/technoMusic.jpg'

const Genre = () => {
    return(
        <div className="exploreGenreDiv">
            <h1 className="exploreGenreHeading">Genres</h1>
            <div className="exploreGenreInfoPic">
                <GenreComponentDiv name='Hip hop music' image={hipHopMusic}/>
                <GenreComponentDiv name='Rock' image={rockMusic}/>
                <GenreComponentDiv name='Country music' image={countryMusic}/>
                <GenreComponentDiv name='Pop music' image={popMusic}/>
                <GenreComponentDiv name='Jazz' image={jazzMusic}/>
                <GenreComponentDiv name='Techno' image={technoMusic}/>   
            </div>  
        </div>
    )
}

export default  Genre;