import React, { useState } from 'react';
import { BasicInput } from '../../../../UI/BasicInput';
import { ModalHeader } from '../../../../UI/ModalHeader';
import { AddBookmarkMenuDescription } from '../components/AddBookmarkMenuDescription';
import './AddBookmarkMenu.scss';
import { AddBookmarkMenuType } from './AddBookmarkMenuType';

export const AddBookmarkMenu: React.FC<AddBookmarkMenuType> = ({ onClose }) => {
   const [ inputAddBookmarkValue, setInputAddBookmarkValue ] = useState("")
   const [ isDescriptionVisible, setIsDescriptionVisible ] = useState(true)
   return (
      <div className='add-bookmark-menu__container'>
         <ModalHeader onClose={onClose} title="Add a bookmark to this channel"/>
         <div className='add-bookmark-menu__main'>
            <p className='add-bookmark-menu__input-title'>Link</p>
            <BasicInput 
               placeholder='https://docs.acme.com' 
               value={inputAddBookmarkValue} 
               setValue={setInputAddBookmarkValue}
               margin="0 0 20px 0" 
            />
            {isDescriptionVisible && <AddBookmarkMenuDescription onClose={()=>setIsDescriptionVisible(false)}/>}
         </div>
      </div>
   );
};
