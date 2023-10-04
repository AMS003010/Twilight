import React from 'react'

import Logo from '../components/logo'

class intro extends React.Component {
    render(){
        const mystyle = {
            backgroundColor: '#231C27',
            height: '100vh',
        }
        return(
            <div style={mystyle}>
                <Logo/>
                
            </div>
        )
    }
}

export default intro