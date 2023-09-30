import React from 'react';

import Logo from '../components/logo'

class aboutUs extends React.Component {
    render(){
        const mystyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        };

        return (
            <div style={mystyle}>
                <Logo/>
                <div className='aboutUsContainer'>
                    <div>
                        <div className='aboutUsHeading'>
                            <h1>Meet the Team</h1>
                        </div>
                        <hr className='aboutUshr'/>
                        <div className='aboutUsInfo'>
                            <p>Our music streaming website, powered by the Majestically Evolving Robustness of the MERN stack, was brought to life by a passionate and dedicated team of individuals who share a common love for music and technology.Get to know the faces behind the beats and the minds behind the code, as we introduce you to the team that's transforming your musical experience, one click at a time.</p>   
                        </div>
                    </div>
                    <div class="image-container">
                        <div class="image" id='team0'>
                        </div>
                        <div class="image"id='team1'>
                        </div>
                        <div class="image"id='team2'>
                        </div>
                        <div class="image"id='team3'>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutUs;
//I want this react component to cover the entire screen