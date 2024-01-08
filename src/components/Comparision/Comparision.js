import './Comparision.css';
import compChart from './Frame 162561.svg';
const Comparision=()=>{
    return(
        <div className='comparison-container'>
            <div className='comparison-container-heading'>
                <div className='comparison-container-highlight'>Panther </div>
                <div className='comparison-text'> vs. traditional in-office therapy</div>
            </div>
            <div className='comparison-chart'>
                <img src={compChart} alt='compchart'></img>
            </div>
        </div>
    );
}
export default Comparision;