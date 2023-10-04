import React from 'react';

class IntroLogin extends React.Component {
    render(){
        const mystyle = {
            display: 'flex'
        } 
        return(
            <div style={mystyle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <circle cx="21" cy="21" r="21" fill="#B1AAAA"/>
                </svg>
                <div>
                    Login
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                    <circle cx="21" cy="21" r="21" fill="#B1AAAA"/>
                </svg>
            </div>
        )
    }
}

export default IntroLogin;