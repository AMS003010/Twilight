import React from 'react'

import Logo from '../components/logo'

import { UseLogin } from '../hooks/useLogin'
import { useState } from 'react'

const Login = () => {
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        const [email,setEmail] =  useState('')
        const [password,setPassword] = useState('')
        const {login,isLoading,error} = UseLogin()

        const handleSubmit = async (e) => {
            e.preventDefault()
            await login(email,password)
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
                                <button disabled={isLoading}>Login</button>
                                {error && <div className="error">{error}</div>}
                            </div>
                        </form>
                    </div>
                    <div className='loginCoverImage'></div>
                </div>
                <div className='loginUnderLay'></div>
            </div>
        )
    }

export default Login