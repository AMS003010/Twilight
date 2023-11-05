import { useState,useEffect } from 'react';

import Logo from '../components/logo';

import artistBg from '../img/artistBg.jpg';
import sunBoy from '../img/sunboy.jpg';

const UserPage = () => {
    const [mySongs, setMySongs] = useState([]);

    const myStyle ={
        backgroundImage:`url('${artistBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        width:'96%',
        height:'86%',
        margin:'30px',
        borderRadius:'20px',
        mixBlendMode:'exclusion',
        display:'flex'
    }

    const div1style = {
        fontFamily:'Squada One',
        fontWeight:'900',
        fontSize:'60px',
        backgroundColor:'#f12f2b',
        borderRadius:'50px',
        marginTop:'50px',
        padding:'10px',
        width:'33rem',
        textAlign:'center',
        letterSpacing:'2.5%',
    }

    const div2Style = {
        fontFamily:'Squada One',
        fontWeight:'900',
        fontSize:'48px',
        backgroundColor:'#f12f2b',
        borderRadius:'50px',
        marginTop:'50px',
        padding:'20px',
        width:'4rem',
        textAlign:'center',
        letterSpacing:'1.5%',
        marginLeft:'20px',
        height:'34.4rem'
    }

    const userDiv1 = {
        backgroundImage:`url('${sunBoy}')`,
        width:'200px',
        height:'200px',
        borderRadius:'20px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        marginTop:'1rem',
        marginBottom:'20px'
    }
    const userDiv2 = {
        fontFamily:'Poppins',
        fontSize:'30px',
        color:'white'
    }
    const userDiv3 = {
        fontFamily:'Poppins',
        fontSize:'20px',
        color:'rgb(129, 133, 137)',
        marginBottom:'35px'
    }

    useEffect(() => {
        const fetchLikes = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'))
                const userEmail = user.email;
                console.log(userEmail);
                const responseLiked = await fetch(`/api/song/liked?email=${userEmail}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                const likes = await responseLiked.json();
                setMySongs(likes);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchLikes();
    }, []);

    return (
        <div style={{ height: '100vh' }}>
            <Logo />
            <div style={myStyle}>
                <div  style={div2Style}>L<br/>I<br/>K<br/>E<br/>D<br/> <br/>S<br/>O<br/>N<br/>G<br/>S</div>
                <div className='searchResultsWrapper' style={{ margin: '50px', height: '80%',borderColor:'#231c27',borderWidth:'8px',marginLeft:'10px'}}>
                    <div className='searchResultsContainer'>
                        {mySongs.likedsongs ? (
                            mySongs.likedsongs.map((s) => (
                                <div className='searchBox' key={s._id} style={{backgroundColor:'#231c27',borderRadius:'20px',padding:'10px'}}>
                                    <div className='searchImg' style={{ backgroundImage: `url('${s.img}')` }}></div>
                                    <div style={{fontWeight:'900'}}>
                                        <span style={{ color: 'white' }}>Song</span><br />
                                        <span style={{ color: 'rgb(126, 126, 126)' }}>{s.name}</span><br />
                                        <span style={{ color: 'rgb(126, 126, 126)' }}>{s.artist}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading....</p>
                        )}
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={div1style}>My Dashboard</div>
                    {mySongs.user ? (
                        <div style={{backgroundColor:'#0c223f',display:'flex',flexDirection:'column',alignItems:'center',width:'33rem',borderRadius:'40px',marginTop:'20px',padding:'10px'}}>
                            <div style={userDiv1}></div>
                            <div style={userDiv2}>{mySongs.user.name}</div>
                            <div style={userDiv3}>{mySongs.user.email}</div>
                            <div style={{fontFamily:'Secular one',width:'27rem',color:'rgb(129, 133, 137)',fontSize:'25px',textAlign:'center'}}>"  For all you cool cats out there, finding your groove in the laid-back, retro embrace of twilight.     "</div>
                        </div>
                    ) : (
                        <p>Loading user data...</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserPage;

//This is a MERN project.In this react component, I want fetchLikes function to execute first and fetchData function should execute. Both are async functions.
