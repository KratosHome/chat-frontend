import { faSearch, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useState } from 'react';

import "./HelpBlockInput.scss"




export const HelpBlockInput: React.FC = memo(
   () => {
    const [ inputHelpValue, setInputHelpValue ] = useState("")
    const [ isInputFocus, setIsInputFocus] = useState(false);
    const [ isInputHover, setIsInputHover] = useState(false);
    const handleInputFocusOrHover = () => {
        if(isInputFocus){
            return "help-block-input__focused";
        }
        if(isInputHover){
            return "help-block-input__hovered";
        }
        return "";
    }

    return (
        <div className='help-block-input__container'>
            <p className='help-block-input__header'>Find answers quickly</p>
            <form 
                className={`help-block-input ${handleInputFocusOrHover()} `} 
                onFocus={()=>setIsInputFocus(true)} 
                onBlur={()=>setIsInputFocus(false)}
                onMouseEnter={()=>setIsInputHover(true)}
                onMouseLeave={()=>setIsInputHover(false)}
            >
                <label htmlFor="help-block-input">
                    <FontAwesomeIcon className='fa-lg' icon={faSearch}/>
                </label>
                <input 
                    id="help-block-input" 
                    placeholder='How can we help?' 
                    value={inputHelpValue} 
                    onChange={(e)=>setInputHelpValue(e.target.value)}/>
                {inputHelpValue &&(
                <div className="help-block-input__xmark" onClick={()=>setInputHelpValue("")}>
                    <FontAwesomeIcon className='fa-lg' icon={faCircleXmark}/>
                </div>)}
            </form>
        </div>
      );
   },
);