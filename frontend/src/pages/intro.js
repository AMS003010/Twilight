import React from 'react'

import Logo from '../components/logo'
import HighlightedButton from '../components/highlightedButton'

class intro extends React.Component {
    render(){
        const mystyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        const navStyle = {
            display: 'flex',
        }
        return(
            <div style={mystyle}>
                <nav style={navStyle}>
                    <Logo/>
                    <button className="button-77">Login</button>
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
                        <HighlightedButton text='Click here to Sign Up'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default intro