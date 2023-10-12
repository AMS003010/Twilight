import React from 'react';

import Logo from '../components/logo'

class Search extends React.Component {
    render(){
        const myStyle = {
            backgroundColor: '#231C27',
            height: '100vh'
        }
        return(
            <div style={myStyle}>
                    <nav style={{display:"flex"}}>
                    <Logo/>
                </nav>
                    <div style={myStyle}>
                        
                    </div>
                </div>
        )
    }
}

export default Search