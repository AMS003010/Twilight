import React from 'react';

import Logo from '../components/logo'
import github from '../img/github.png'
import insta from '../img/instagram.png'
import twitter from '../img/twitter.png'
import email from '../img/email.png'

class aboutUs extends React.Component {
    render(){
        const mystyle = {
            backgroundColor: '#231C27',
            height: '205vh',
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
                        <div className="image" id='team0'>
                        </div>
                        <div className="image"id='team1'>
                        </div>
                        <div className="image"id='team2'>
                        </div>
                        <div className="image"id='team3'>
                        </div>
                    </div>
                </div>
                <div className='socialMedia'>
                    <a href='https://github.com/AMS003010' target='blank'>
                        <img src={github} alt='Github' className='socialMediaImage'/>
                    </a>
                    <a href='https://twitter.com/ams_132_' target='blank'>
                        <img src={twitter} alt='Twitter' className='socialMediaImage'/>
                    </a>
                    <a href='https://www.instagram.com/' target='blank'>
                        <img src={insta} alt='Instagram' className='socialMediaImage'/>
                    </a>
                </div>
                <div id='banner'></div>
                <div className='contactUsHeading'>Contact Us</div>
                <div id='emailImage'>
                    <img src={email} alt='Github'/>
                    <a href='mailto:twilight@gmail.com'>twilight@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default aboutUs;