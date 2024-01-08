import './Workingcard.css';
// import ImgCard from '../Working/Frame 3128.svg';
const Workingcard=({ImgCard,heading,text})=>{
    return(
        <div className='working-card-box'>
            <div className='working-card-left'>
                <img src={ImgCard} className='workding-card-left-image' alt='img'></img>
            </div>
            <div className='working-card-right'>
                <div className='working-card-right-heading'>
                {heading}
                </div>
                <div className='working-card-right-text'>
                {text}
                </div>
            </div>
        </div>
    );
}
export default Workingcard;