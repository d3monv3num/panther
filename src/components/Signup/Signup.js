import './Signup.css';
import Signupform from '../SignupForm/Signupform';
const Signup=()=>{
    return(
        <div className='signup-container'>
            <div className='signup-head-container'>
            <div className='signup-component-heading'>
            <div className='signup-heading-highlight'>Sign Up</div> to start therapy!
            </div>
            </div>
            <Signupform/>
        </div>
    );
}
export default Signup;