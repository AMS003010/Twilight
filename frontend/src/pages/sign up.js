import React from 'react'

import Logo from '../components/logo'

import { useState } from 'react'
import { UseSignUp } from '../hooks/useSignup'

const SignUp = () => {
    
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const {signup,isLoading,error} = UseSignUp()

        const handleSubmit = async (e) => {
            e.preventDefault()
            await signup(email,password)
        }

        return(
            <div style={myStyle}>
                <nav>
                    <Logo/>
                </nav>
                <div className='signUpLayout'> 
                    <form onSubmit={handleSubmit}>
                        <h1 className='signUpHeading'>Sign Up</h1>
                        <div className='signUpDiv'>
                            <div className='signUpColumn1'>
                                <div className='signUpName'>
                                    <label>Name*</label><br/>
                                    <input type='text'/>
                                </div>
                                <div className='signUpEmail'>
                                    <label>Email*</label><br/>
                                    <input
                                        type='email'
                                        onChange={(e) => {setEmail(e.target.value)}}
                                        value={email}
                                    />
                                </div>
                                <div className='signUpPassword'>
                                    <label>Password*</label><br/>
                                    <input
                                        type='password'
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        value={password}
                                    />
                                </div>
                            </div>
                            <div className='signUpColumn2'>
                                <div className='signUpDob'>
                                    <label>Date of Birth*</label><br/>
                                    <input type='date'/>
                                </div>
                                <div className='signUpGender'>
                                    <label>Gender*</label><br/>
                                    <input type='text'/>
                                </div>
                            </div>
                        </div>
                        <button className='signUpButton' disabled={isLoading}>Submit</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
                <div className='signUpUnderLayDiv'></div>
            </div>
        )
    }


export default SignUp