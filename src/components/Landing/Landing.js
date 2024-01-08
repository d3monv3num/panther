import Comparision from '../Comparision/Comparision';
import Faqs from '../Faqs/Faqs';
import Herosection from '../Herosection/Herosection';
import Membership from '../Membership/Membership';
import Stats from '../Stats/Stats';
import Therapistmatching from '../Therapistmatching/Therapistmatching';
import Working from '../Working/Working';
import './Landing.css';
function Landing() {
  return (
    <div className='App'>
      <Herosection/>
      <Stats/>
      <Therapistmatching/>
      <Working/>
      <Comparision/>
      <Faqs/>
      <Membership/>
    </div>
  );
}

export default Landing;