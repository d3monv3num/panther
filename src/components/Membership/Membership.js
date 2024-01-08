import './Membership.css';
import membershipImg from './Rectangle 160.svg';
import { Link } from 'react-router-dom';
const Membership=()=>{
    return(
        <div className='membership-container'>
            <div className='membership-left'>
                <div className='membership-heading'>Give the gift of a membership</div>
                <div className='membership-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</div>
                <div className='membership-button'>
                    <button>More Success Stories</button>
                </div>
                <div className='membership-help-text'>
                If you are in a crisis or any other person may be in danger - don't use this site. <Link to={'/landing'}>These resources</Link> can provide you with immediate help.
                </div>
            </div>
            <div className='membership-right'>
                <img src={membershipImg} alt='gift'></img>
            </div>
        </div>
    );
}
export default Membership;