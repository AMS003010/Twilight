import React from 'react'

import Logo from '../components/logo'

class SignUp extends React.Component {
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
                <div className='signUpLayout'> 
                    <form>
                        <h1 className='signUpHeading'>Sign Up</h1>
                        <div className='signUpDiv'>
                            <div className='signUpColumn1'>
                                <div className='signUpName'>
                                    <label>Name*</label><br/>
                                    <input type='text'/>
                                </div>
                                <div className='signUpEmail'>
                                    <label>Email*</label><br/>
                                    <input type='email'/>
                                </div>
                                <div className='signUpPassword'>
                                    <label>Password*</label><br/>
                                    <input type='password'/>
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
                        <button className='signUpButton'>Submit</button>
                    </form>
                </div>
                <div className='signUpUnderLayDiv'></div>
            </div>
        )
    }
}

export default SignUp