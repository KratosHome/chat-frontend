
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useState } from 'react';
import './BasicInput.scss';
import { BasicInputType } from './BasicInputType';

export const BasicInput: React.FC<BasicInputType> = ({value , setValue, placeholder, svgIcon, fontAwesomeIcon, iconPosition, margin}) => {
   const [ isInputFocus, setIsInputFocus] = useState(false);
   const [ isInputHover, setIsInputHover] = useState(false);
   const handleInputFocusOrHover = () => {
       if(isInputFocus){
           return "basic-input__focused";
       }
       if(isInputHover){
           return "basic-input__hovered";
       }
       return "";
   }

   const checkIcon = () => {
            if(fontAwesomeIcon){
                return <FontAwesomeIcon className='fa-lg' icon={fontAwesomeIcon}/>
            }
            if(svgIcon){
                return svgIcon
            }
        }

   return (
         <div className={`basic-input ${handleInputFocusOrHover()}`} style={{margin}} >
            { iconPosition === "left" && checkIcon() }
            <input 
               onFocus={()=>setIsInputFocus(true)} 
               onBlur={()=>setIsInputFocus(false)}
               onMouseEnter={()=>setIsInputHover(true)}
               onMouseLeave={()=>setIsInputHover(false)}
               placeholder={placeholder} 
               value={value} 
               onChange={(e)=>setValue(e.target.value)}/>
             { iconPosition === "right" && checkIcon() }
         </div>
   );
};
