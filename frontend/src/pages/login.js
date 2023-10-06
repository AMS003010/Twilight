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
                <div className='logindiv'>
                    <div className='loginForm'>
                        <form>
                            <h1 className='loginHeading'>Login</h1>
                            <div className='loginCenter'>
                                <div className='loginEmail'>
                                    <label>Email*</label><br/>
                                    <input type='email'/>
                                </div>
                                <div className='loginPassword'>
                                    <label>Password*</label><br/>
                                    <input type='password'/>
                                </div>
                            </div>
                            <div className='loginButton'>
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='loginCoverImage'></div>
                </div>
                <div className='loginUnderLay'></div>
            </div>
        )
    }
}

export default Login