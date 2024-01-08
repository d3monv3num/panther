import './Navbar.css';
import logoPanther from './logoPanther.png';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='navbar-left'>
                <img src={logoPanther} alt='logoPanther'></img>
            </div>
            <div className='navbar-right'>
                <Link to={'/signup'}>
                <button className='navbar-login' >Login</button>
                </Link>
            </div>
        </div>
    );
}
export default Navbar;