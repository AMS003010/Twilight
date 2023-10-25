import React from "react";

import userImage1 from "../img/userImage1.png"
import userImage2 from "../img/userImage2.png"
import userImage3 from "../img/userImage3.png"
import userImage4 from "../img/userImage4.png"

const ProfileInfo = (props) => {

    const userImages = {
        "User 1": userImage1,
        "User 2": userImage2,
        "User 3": userImage3,
        "User 4": userImage4
    };

    return (
        <div className='profile'>
                <div className='profileLogo'>
                <img src={userImages[props.username]} alt={props.username} />
                </div>
                <div>
                    <h2 className="profileInfoName">{props.username}</h2>
                </div>
            </div>
    )
}

export default ProfileInfo;
