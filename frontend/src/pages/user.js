import { useState,useEffect } from 'react';

import Logo from '../components/logo';

import artistBg from '../img/artistBg.jpg';
import sunBoy from '../img/sunboy.jpg';
import moonMan from '../img/moonMan.png';
import edit from '../img/edit.png';
import tick from '../img/tick.png';

const UserPage = () => {
    const [mySongs, setMySongs] = useState([]);
    const [editMode,setEditMode] = useState(1);
    const [newName,setNewName] = useState('');
    const [name,setName] = useState('');

    const myStyle ={
        backgroundImage:`url('${artistBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        width:'96%',
        height:'86%',
        margin:'30px',
        borderRadius:'20px',
        mixBlendMode:'color-dodge',
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
    }
    const userDiv2 = {
        fontFamily:'Poppins',
        fontSize:'30px',
        color:'white',
        display:'flex',
        alignItems:'center',
        width:'max-content',
        height:'max-content',
        justifyContent:'middle'
    }
    const userDiv3 = {
        fontFamily:'Poppins',
        fontSize:'20px',
        color:'rgb(129, 133, 137)',
        marginBottom:'10px'
    }

    const profileDiv = {
        backgroundColor:'#0c223f',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'33rem',
        borderRadius:'40px',
        marginTop:'20px',
        padding:'10px'
    }

    const editSpan = {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        width:'20px',
        height:'20px',
        marginLeft:'10px',
    }

    const handleEditName = () => {
        setEditMode(!editMode);
    }

    const handleClickEdit = async () => {
        const response = await fetch(`/api/user/${mySongs.user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"name":newName})
        });

        if (!response.ok) {
            console.log("Unable to load profile info");
            return;
        }

        if(response.ok){
            setName(newName);
            setEditMode(1);
        }
    };

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
    
                // Move the setName call inside the then block to ensure it's called after setMySongs
                if (likes.user) {
                    setName(likes.user.name);
                }
    
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
                        {mySongs.likedsongs && mySongs.likedsongs[0] ? (
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
                            <div style={{textAlign:'center',objectPosition:'center',fontFamily:'Poppins',fontSize:'40px',color:'white',fontWeight:'900',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',marginTop:'22%'}}>
                                <img src={moonMan} alt='k' width='120px' height='120px'/>
                                <div>Why so shy.<br/>Go ❤️ some songs</div>
                            </div>
                        )}
                    </div>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={div1style}>My Dashboard</div>
                    {mySongs.user ? (
                        <div style={profileDiv} className='profileDivClassName'>
                            <div style={userDiv1}></div>
                            <div style={userDiv2}>
                                { 
                                editMode ? <div style={{marginTop:'10px',marginBottom:'10px',display:'flex',alignItems:'center'}}>
                                                <div>{name ? name : <p>Loading...</p>}</div>
                                                <img src={edit} alt='k' style={editSpan} className='editname' onClick={() => {handleEditName()}}/>
                                            </div> 
                                            : 
                                            <div style={{display:'flex',alignItems:'center'}}>
                                                <input
                                                    type='text'
                                                    onChange={(e) => {setNewName(e.target.value)}}
                                                />
                                                <img src={tick} alt='k' style={editSpan} className='editokname' onClick={() => {handleClickEdit()}}/>
                                            </div>
                                    }
                            </div>
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

//This is a MERN project. This is a react component and it is not displaying the name on loading the component as it shows the name state is empty initially"
