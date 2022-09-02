import React from 'react';
import { PopupButton } from '../../../UI/PopupButton';
import { PopupIconButton } from '../../../UI/PopupIconButton';
import './AddPeopleMessage.scss';
import { AddPeopleMessageType } from './AddPeopleMessageType';

export const AddPeopleMessage: React.FC<AddPeopleMessageType> = ({
   placeholderName,
   closeModal,
}) => {
   return (
      <div className='container-menu widthAddPeopleMessage'>
         <div className='container-menu__items'>
            <div className='containerAddPeopleMessage'>
               <h1>Add people</h1>
               <h3># {placeholderName}</h3>
               <PopupIconButton
                  buttonAriaLabel={'Close'}
                  buttonClass={'dark-modal-container__close-button'}
                  buttonData={'close_modal_button'}
                  buttonClick={() => closeModal(false)}
               >
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='m 5.227 5.227 l 9.546 9.546 m 0 -9.546 l -9.546 9.546'
                     ></path>
                  </svg>
               </PopupIconButton>
               <input type='text' placeholder={'Enter a name or email'} />
               <PopupButton
                  buttonClass={'primary'}
                  buttonText={'Done'}
                  isButtonBlocked={true}
               />
            </div>
         </div>
      </div>
   );
};
