import {Link} from 'react-router-dom'

const Logo = () => {
    return (
        <div className='logoContainer'>
            <Link to='/'>
                <h1>TWILIGHT<span className='dot'>.</span></h1>
            </Link>
        </div>
    )
}

export default Logo;