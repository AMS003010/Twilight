import React from "react";
import { NavLink } from "react-router-dom";

class HighlightedButton extends React.Component {
    render(){
        const myStyle = {
            border: '10px dashed red',
            fontFamily: 'Monoton',
            fontSize: '30px',
            width: '150px',
            height: '150px',
            marginLeft: '260px',
            marginTop: '50px',
            textAlign: 'center'
        }
        const linkstyle = {
            textDecoration: 'none'
        }
        return(
            <div style={myStyle}>
                <NavLink to='/signup' style={linkstyle}>
                    {this.props.text}
                </NavLink>
            </div>
        )
    }
}

export default HighlightedButton