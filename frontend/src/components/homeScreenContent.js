import NavBar from './NavBar';

const homeContent = () => {
    return(
        <div className='homeContentContainer'>
            <NavBar></NavBar>
            <div className='content'>
                Explore.<br/><br/>
                Enjoy.<br/><br/>
                Music.
            </div>
            <button className="button-17">
                Listen now!
            </button>
        </div>
    )
}

export default homeContent;