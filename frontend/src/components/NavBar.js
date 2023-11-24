import {NavLink} from 'react-router-dom'

import Logo from './logo'

const NavBar = () => {
    return(
        <div className='navbarcontainer'>
            <Logo></Logo>
            <div className='inner'>
                <NavLink className='homeNav' to='/intro'>
                    <h1>Home</h1>
                </NavLink>
                <NavLink className='aboutNav' to='/aboutus'>
                    <h1>About us</h1>
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;