import './Footer.css';
import { Link } from 'react-router-dom';
import xIcon from './line-md_twitter-x-alt.svg';
import inIcon from './entypo-social_linkedin-with-circle.svg';
import instaIcon from './basil_instagram-solid.svg';
import fbIcon from './ic_sharp-facebook.svg';
const Footer=()=>{
    return(
        <div className='footer-container'>
            <div className='upper-footer'>
            <ul className='page-anchors'>
                <li><Link to={'/landing'} className='footer-anchor-links'>Home</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Buisness</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>About</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>FAQs</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Reviews</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Advice</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Careers</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Find a Therapist</Link></li>
            </ul>
            <ul className='socials'>
                <li><Link to={'/landing'}><img src={xIcon} alt='social'/></Link></li>
                <li><Link to={'/landing'}><img src={inIcon} alt='social'/></Link></li>
                <li><Link to={'/landing'}><img src={fbIcon} alt='social'/></Link></li>
                <li><Link to={'/landing'}><img src={instaIcon} alt='social'/></Link></li>
            </ul>
            </div>
            <div className='lower-footer'>
            <ul className='page-anchors'>
                <li><Link to={'/landing'} className='footer-anchor-links'>Privacy Policy</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Sharing Settings</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>Web Accessibility</Link></li>
                <li><Link to={'/landing'} className='footer-anchor-links'>@2023 help</Link></li>
            </ul>
            </div>
        </div>
    );
}
export default Footer;