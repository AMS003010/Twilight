import ArtistCompDiv from "./artistComponentDiv";

import artist1 from '../img/Lil Nas X.jpg'
import artist2 from '../img/Kanye West.png'
import artist3 from '../img/Michael Jackson.jpg'
import artist4 from '../img/Taylor Swift.jpg'
import artist5 from '../img/Maroon 5.jpg'

const Artists = () => {
    return(
        <div className='exploreRightSideBar'>
            <h1  className="topArtistHeading">Top Artists</h1>
            <div>
                <ArtistCompDiv image={artist1} name='Lil Nas X' listeners='23,45,182'/>
                <ArtistCompDiv image={artist2} name='Kanye West' listeners='91,23,100'/>
                <ArtistCompDiv image={artist3} name='Michael Jackson' listeners='49,21,211'/>
                <ArtistCompDiv image={artist4} name='Taylor Swift' listeners='65,77,511'/>
                <ArtistCompDiv image={artist5} name='Maroon 5' listeners='79,30,111'/>
            </div>
        </div>
    )
}

export default Artists;