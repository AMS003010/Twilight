import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

import Logo from '../components/logo'

import { UseLogin } from '../hooks/useLogin'
import { useState } from 'react'

const Login = () => {
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        const signUpLink = <NavLink to={'/signup'} style={{fontFamily: 'Poppins'}}>Sign Up</NavLink>;

        const [email,setEmail] =  useState('')
        const [password,setPassword] = useState('')
        const {login,isLoading,error} = UseLogin()

        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log("handleSubmit : "+email+"   "+password)
            await login(email,password)
        }

        const handleClick = () => {
            <Link to='/explore'/>
        }

        return(
            <div style={myStyle}>
                <nav>
                    <Logo/>
                </nav>
                <div className='logindiv'>
                    <div className='loginForm'>
                        <form on onSubmit={handleSubmit}>
                            <h1 className='loginHeading'>Login</h1>
                            <div className='loginCenter'>
                                <div className='loginEmail'>
                                    <label>Email*</label><br/>
                                    <input
                                        type='email'
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        value={email}
                                    />
                                </div>
                                <div className='loginPassword'>
                                    <label>Password*</label><br/>
                                    <input
                                        type='password'
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <div className='loginButton'>
                                <button disabled={isLoading} onClick={handleClick}>Login</button>
                            </div>
                            <h5 style={{fontFamily: 'Poppins'}}>Don't have an account? {signUpLink}.</h5>
                            {error && <div className="error" style={{marginTop:'60px'}}>{error}</div>} 
                        </form>
                    </div>
                    <div className='loginCoverImage'></div>
                </div>
                <div className='loginUnderLay'></div>
            </div>
        )
    }

export default Login