
import React from 'react';
import { PopupIconButton } from '../PopupIconButton';
import './ModalHeader.scss';
import { ModalHeaderType } from './ModalHeaderType';

export const ModalHeader: React.FC<ModalHeaderType> = ({ onClose,title }) => {
   return (
       <div className='modal-header__container'>
        <p>{title}</p>
     
            <PopupIconButton 
                buttonClass='modal-header__icon-close' 
                buttonClick={onClose} 
                buttonAriaLabel="close" 
                buttonData='close'
            >
                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                    <path 
                        fill="#1d1c1d" 
                        stroke="currentColor"
                        strokeLinecap="round" 
                        strokeWidth="1.5" 
                        d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546">
                    </path>
                </svg>
            </PopupIconButton>
            

       </div>
   );
};
