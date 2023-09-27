import {Link} from 'react-router-dom'

import Logo from './logo'

const NavBar = () => {
    return(
        <div className='navbarcontainer'>
            <Logo></Logo>
            <div className='inner'>
                <Link className='homeNav'>
                    <h1>Home</h1>
                </Link>
                <Link className='aboutNav'>
                    <h1>About us</h1>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;