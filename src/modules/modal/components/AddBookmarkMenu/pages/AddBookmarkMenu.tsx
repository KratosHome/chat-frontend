import React, { useState } from 'react';
import { AddBookmarkMenuDescription } from '../components/AddBookmarkMenuDescription';
import { AddBookmarkMenuHeader } from '../components/AddBookmarkMenuHeader';
import { AddBookmarkMenuInput } from '../components/AddBookmarkMenuInput';
import './AddBookmarkMenu.scss';
import { AddBookmarkMenuType } from './AddBookmarkMenuType';

export const AddBookmarkMenu: React.FC<AddBookmarkMenuType> = ({ onClose }) => {
   const [ inputAddBookmarkValue, setInputAddBookmarkValue ] = useState("")
   const [ isDescriptionVisible, setIsDescriptionVisible ] = useState(true)
   return (
      <div className='add-bookmark-menu__container'>
         <AddBookmarkMenuHeader onClose={onClose}/>
         <div className='add-bookmark-menu__main'>
            <AddBookmarkMenuInput value={inputAddBookmarkValue} setValue={setInputAddBookmarkValue}/>
            {isDescriptionVisible && <AddBookmarkMenuDescription onClose={()=>setIsDescriptionVisible(false)}/>}
         </div>
      </div>
   );
};
