import {Link} from 'react-router-dom'

import SearchImage from '../img/search-bar.png'

const SearchBar = () => {
    return (
        <div className='searchDiv'>
            <Link className="searchLink" to="/search">
                <img src={SearchImage}/>
            </Link>
        </div>
    )
}

export default SearchBar;