import {Link} from 'react-router-dom'

const HomeNavbar = () => {
    return (
        <div className='homeContainer'>
            <div className='logo'>
                <Link to='/'>
                    <h1>TWILIGHT.</h1>
                </Link>
            </div>
            <div className='homeNav'>
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
            </div>
            <div className='aboutNav'>
                <Link to='/h1'>
                    <h1>About us</h1>
                </Link>
            </div>
        </div>
    )
}

export default HomeNavbar;