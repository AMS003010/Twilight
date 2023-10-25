import React from 'react'
import {Link} from 'react-router-dom'
import profileLogoImg from '../img/profileLogoImg.png'

class ProfileLogo extends React.Component {
    render(){
        return (
            <div className='profileLogoContainer'>
                <Link to='/profile'>
                    <img src={ profileLogoImg } alt={ profileLogoImg }/>
                </Link>
            </div>
        )
    }
}

export default ProfileLogo;