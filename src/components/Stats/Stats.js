import './Stats.css';
import statLeftImg from './Frame 3124.svg';
const Stats=()=>{
    return(
        <div className='stats-container'>
            <div className='stats-left'>
                <img src={statLeftImg} alt='leftimg'></img>
            </div>
            <div className='stats-right'>
                <div className='stat-right-box'>
                <div className='stat-heading'>355,456,344</div>
                <div className='stat-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
                <div className='stat-right-box'>
                <div className='stat-heading'>355,456,344</div>
                <div className='stat-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
                <div className='stat-right-box'>
                <div className='stat-heading'>355,456,344</div>
                <div className='stat-subheading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</div>
                </div>
            </div>
        </div>
    );
}
export default Stats;