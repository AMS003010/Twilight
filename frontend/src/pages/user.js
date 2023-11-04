import Logo from '../components/logo';

import artistBg from '../img/artistBg.jpg';
//import sunBoy from '../img/sunboy.jpg';

const UserPage = () => {
    const myStyle ={
        backgroundImage:`url('${artistBg}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        width:'95%',
        height:'85%',
        margin:'30px',
        borderRadius:'20px',
        mixBlendMode:'exclusion',
        display:'flex'
    }
    const div1Style = {}
    const div2Style = {}
    return(
        <div style={{height:'100vh'}}>
            <Logo/>
            <div style={myStyle}>
                <div style={div1Style}></div>
                <div style={div2Style}></div>
            </div>
        </div>
    )
}

export default UserPage;