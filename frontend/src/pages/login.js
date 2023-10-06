import React from 'react'

import Logo from '../components/logo'

class Login extends React.Component {
    render(){
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        return(
            <div style={myStyle}>
                <nav>
                    <Logo/>
                </nav>
                <div className='loginUnderLay'></div>
                <div></div>
            </div>
        )
    }
}

export default Login