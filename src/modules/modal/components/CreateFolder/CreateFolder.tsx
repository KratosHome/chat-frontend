import { faFolder } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { BasicInput } from '../../../UI/BasicInput';
import { ModalHeader } from '../../../UI/ModalHeader';
import { PopupButton } from '../../../UI/PopupButton';


import './CreateFolder.scss';
import { CreateFolderType } from './CreateFolderType';

export const CreateFolder: React.FC<CreateFolderType> = ({ onClose }) => {
    const [inputValue, setInputValue] = useState("")
   return (
      <div className='create-folder__container'>
        <ModalHeader onClose={onClose} title="Create a folder"/>
        <div className='create-folder__main'>
            <p className="create-folder__input-title">Name</p>
            <BasicInput 
                placeholder='Ex. Project tracker' 
                value={inputValue} 
                setValue={setInputValue} 
                fontAwesomeIcon={faFolder} 
                iconPosition="left"
                margin='0 0 20px 0'
            />
        </div>
        <div className='create-folder__footer'>
            <PopupButton buttonClass='primary' buttonText='Create'/>
            <PopupButton buttonClass='outline' buttonText='Cancel' additionalClass='create-folder__cancel-btn' buttonClick={onClose}/>
        </div>
      </div>
   );
};
