import { useState } from "react";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";
import './Singlequestion.css';
const Singlequestion=({title,info})=>{
    const [showInfo,setShowInfo]=useState(false);
    const toggleShow=()=>{
        setShowInfo(!showInfo);
        console.log(showInfo);
    }
    return(
        <div className="question-container">
            <div className="question-heading" onClick={toggleShow}>
                <div className="question-heading-text">{title}</div>
                <div className="question-heading-button">{showInfo?<MdKeyboardArrowUp/>:<MdKeyboardArrowDown/>}</div>
            </div>
            {showInfo?<div className="answer-text">{info}</div>:<div></div>}
        </div>
    );
}
export default Singlequestion