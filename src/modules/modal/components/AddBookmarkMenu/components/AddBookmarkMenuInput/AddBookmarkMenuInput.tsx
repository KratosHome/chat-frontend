
import React, { useState } from 'react';
import './AddBookmarkMenuInput.scss';
import { AddBookmarkMenuInputType } from './AddBookmarkMenuInputType';

export const AddBookmarkMenuInput: React.FC<AddBookmarkMenuInputType> = ({value , setValue}) => {
   const [ isInputFocus, setIsInputFocus] = useState(false);
   const [ isInputHover, setIsInputHover] = useState(false);
   const handleInputFocusOrHover = () => {
       if(isInputFocus){
           return "add-bookmark-menu-input__focused";
       }
       if(isInputHover){
           return "add-bookmark-menu-input__hovered";
       }
       return "";
   }
   return (
         <div className='add-bookmark-menu-input__container'>
            <p>Link</p>
            <input 
               className={`add-bookmark-menu-input ${handleInputFocusOrHover()} `} 
               onFocus={()=>setIsInputFocus(true)} 
               onBlur={()=>setIsInputFocus(false)}
               onMouseEnter={()=>setIsInputHover(true)}
               onMouseLeave={()=>setIsInputHover(false)}
               placeholder='https://docs.acme.com' 
               value={value} 
               onChange={(e)=>setValue(e.target.value)}/>
         </div>
   );
};
