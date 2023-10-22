import searchIcon from '../img/searchBar.png'

const Search = () => {
    return(
        <div className="searchContainer">
            <div className='searchBarContainer'>
                <form>
                    <input
                        className="searchBar"
                        placeholder="Search"
                    />
                </form>
                <img src={searchIcon} alt='k'/>
            </div>
        </div>
    )
}

export default Search;