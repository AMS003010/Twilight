import React from 'react'

import Logo from '../components/logo'
import IntroLogin from '../components/introLogin'

class intro extends React.Component {
    render(){
        const mystyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        return(
            <div style={mystyle}>
                <nav>
                    <Logo/>
                    <IntroLogin/>
                </nav>
                <div className='introContainer'>
                    <div>
                        <div className='introImageContainer'>
                            <div className='introdiv1'>
                            </div>
                            <div className='introdiv2'></div>
                        </div>
                        <div className='introInfo'>
                            <div className='introdiv3'>
                                " Discover your musical horizon with Twilight "
                            </div>
                            <div className='introdiv4'>
                                DISCOVER<br/>FROM<br/>1,00,000+<br/>SONGS
                            </div>
                        </div>
                    </div>
                    <div className='introSignUp'>
                        Sign Up<br/>for<br/>Free
                    </div>
                </div>
            </div>
        )
    }
}

export default intro