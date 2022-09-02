import React, { useState, FC } from 'react';
import { PopupButton } from '../../../UI/PopupButton';
import { PopupIconButton } from '../../../UI/PopupIconButton';
import './AddDescription.scss';
import { AddDescriptionType } from './AddDescriptionType';

export const AddDescription: FC<AddDescriptionType> = ({
   setIsModalOpenDescription,
   descriptionChannel,
   setDescriptionChannel,
}) => {
   const [focusInput, setFocusInput] = useState<boolean>(false);
   const [value, setValue] = useState<string>(descriptionChannel);

   const changeText = (e: any) => {
      setValue(e.target.value);
   };
   const SaveText = () => {
      setIsModalOpenDescription(false);
      setDescriptionChannel(value);
   };

   return (
      <div className='container-menu widthAddDescription'>
         <div className='containerAddDescription'>
            <div className='headerAddDescription'>
               <h1
                  style={{
                     textShadow: focusInput
                        ? '0px 0px 1px rgba(0,0,0,0.5)'
                        : '',
                  }}
               >
                  Edit description
               </h1>
               <PopupIconButton
                  buttonAriaLabel={'Close'}
                  buttonClass={'dark-modal-container__close-button'}
                  buttonData={'close_modal_button'}
                  buttonClick={() => setIsModalOpenDescription(false)}
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
            </div>
            <textarea
               onFocus={() => {
                  setFocusInput(!focusInput);
               }}
               onBlur={() => {
                  setFocusInput(!focusInput);
               }}
               onChange={(e) => changeText(e)}
               value={value}
            />
            <div
               className='textAddDescription'
               style={{
                  textShadow: focusInput ? '0px 0px 1px rgba(0,0,0,0.1)' : '',
               }}
            >
               Let people know what this channel is for.
            </div>
            <div className='buttonAddDescription'>
               <PopupButton
                  buttonClass={'outline'}
                  buttonClick={() => setIsModalOpenDescription(false)}
                  buttonText={'Cancel'}
               />
               <PopupButton
                  buttonClass={'primary'}
                  buttonClick={() => SaveText()}
                  buttonText={'Save'}
               />
            </div>
         </div>
      </div>
   );
};
