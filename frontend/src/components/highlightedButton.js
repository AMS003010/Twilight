import React from "react";
import { NavLink } from "react-router-dom";

class HighlightedButton extends React.Component {
    render(){
        
        return(
            <NavLink to='/signup'>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="43" viewBox="0 0 38 43" fill="none" id="svg1">
                    <path d="M38 21.5L0.5 42.7176V0.282377L38 21.5Z" fill="yellow"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="91" height="91" viewBox="0 0 91 91" fill="none" id="svg2">
                    <circle cx="45.5" cy="45.5" r="40" stroke="yellow" strokeWidth="3"/>
                </svg>
            </NavLink>
        )
    }
}

export default HighlightedButton