import './Therapistmatching.css';
import matchingImage from './pics.svg';
const Therapistmatching=()=>{
    return(
        <div className='matching-container'>
            <div className='matching-left'>
                <div className='matching-left-heading'>Professional and credentialled therapists who you can trust</div>
                <div className='matching-left-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </div>
                <button>Get Matched to a Therapist</button>
            </div>
            <div className='matching-right'>
                <img src={matchingImage} alt='img'/>
            </div>
        </div>
    );
}
export default Therapistmatching;