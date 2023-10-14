import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../components/logo'

import { useState } from 'react'
import { UseSignUp } from '../hooks/useSignup'

const SignUp = () => {
    
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        const [name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [day,setDay] = useState('')
        const [month,setMonth] = useState('')
        const [year,setYear] = useState('')
        const [gender,setGender] = useState('')
        const [selectedDate,setSelectedDate] = useState('')
        const {signup,isLoading,error} = UseSignUp()

        const handleSubmit = async (e) => {
            e.preventDefault()
            console.log(email+"     "+password+"      "+day+" "+month+" "+year)
            await signup(name,email,password,day,month,year,gender)
        }

        const handleClick = () => {
            <Link to='/profile'/>
        }

        const handleDateChange = (e) => {
            const inputDate = e.target.value;
            setSelectedDate(inputDate);
          
            const dateParts = inputDate.split('-');
            if (dateParts.length === 3) {
              const [year, month, day] = dateParts;
              setYear(year);
              setMonth(month);
              setDay(day);
            }
          };

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
                                    <input
                                        type='text'
                                        onChange={(e) => {setName(e.target.value)}}
                                        value={name}
                                    />
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
                                    <input
                                        type='date'
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                    />
                                </div>
                                <div className='signUpGender'>
                                    <label>Gender*</label><br/>
                                    <input
                                        type='text'
                                        onChange={(e) => {setGender(e.target.value)}}
                                        value={gender}
                                    />
                                </div>
                            </div>
                        </div>
                        <button className='signUpButton' disabled={isLoading} onClick={handleClick}>Submit</button>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
                <div className='signUpUnderLayDiv'></div>
            </div>
        )
    }


export default SignUp