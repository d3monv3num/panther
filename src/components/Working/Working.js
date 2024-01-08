import Workingcard from '../Workingcard/Workingcard';
import WorkingCardData from './WorkingCardData';
import arrowImg from './fa6-solid_arrow-up.svg';
import './Working.css';
const Working=()=>{
    return(
        <div className='working-container'>
            <div className='working-container-heading'>How it works</div>
            <div className='working-container-parts'>
                <Workingcard {...WorkingCardData[0]}/>
                <img className='arrow-down' src={arrowImg} alt='arrow'></img>
                <Workingcard {...WorkingCardData[1]}/>
                <img className='arrow-down' src={arrowImg} alt='arrow'></img>
                <Workingcard {...WorkingCardData[2]}/>
                <img className='arrow-down' src={arrowImg} alt='arrow'></img>
            </div>
        </div>
    );
}
export default Working;