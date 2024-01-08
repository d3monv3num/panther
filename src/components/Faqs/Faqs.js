import './Faqs.css';
import Singlequestion from '../Singlequestion/Singlequestion';
import FaqsData from './FaqsData';
import { Link } from 'react-router-dom';
const Faqs=()=>{
    return(
        <div className='faq-section'>
            <div className='faq-heading'>Frequently Asked Questions</div>
            {FaqsData.map((data, index) => (
          <Singlequestion key={index} {...data}/>
        ))}
        <div className='more-faqs'><Link to={'/landing'} className='more-faqs-link'>More Frequently asked questions</Link></div>
        <div className='more-faqs-button'>
            <button>Get Started</button>
        </div>
        </div>
    );
}
export default Faqs;