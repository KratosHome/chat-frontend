import React, { useEffect, useState } from 'react';
import './SetStatusInput.scss';
import { SetStatusInputPropsType } from './SetStatusInputType';

export const SetStatusInput: React.FC<SetStatusInputPropsType> = ({
   inputValueFunction,
}) => {
   const [inputValue, setInputValue] = useState<string>('');

   const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
      let text = e.target as HTMLElement;
      setInputValue(text.innerText);
   };

   useEffect(() => {
      inputValueFunction(inputValue);
   }, [inputValue]);

   return (
      <div className='status-modal__input'>
         <div className='status-modal__input-container'>
            <div className='status-modal__input-body'>
               <button
                  className='button-unstyled status-modal__input-actions'
                  aria-label='Status emoji: none'
                  data-qa='custom_status_input_emoji_picker'
                  aria-haspopup='true'
                  type='button'
               >
                  <i className='status-modal__input-icon'>
                     <svg data-ufvi='true' viewBox='0 0 20 20'>
                        <g fill='none'>
                           <circle
                              cx='10'
                              cy='10'
                              r='8.25'
                              stroke='currentColor'
                              strokeWidth='1.5'
                           ></circle>
                           <circle
                              cx='7.5'
                              cy='8'
                              r='1.5'
                              fill='currentColor'
                           ></circle>
                           <circle
                              cx='12.5'
                              cy='8'
                              r='1.5'
                              fill='currentColor'
                           ></circle>
                           <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeWidth='1.5'
                              d='M6.902 12c.494 1.5 1.81 2.25 3.125 2.25 1.316 0 2.632-.75 3.125-2.25'
                           ></path>
                        </g>
                     </svg>
                  </i>
               </button>
               <div className='status-modal__input-unstyled-container'>
                  <div className='status-modal__input-unstyled-body'>
                     <div
                        className='status-modal__input-text'
                        data-gramm='false'
                        contentEditable='true'
                        id='custom_status_input2'
                        dir='auto'
                        role='textbox'
                        tabIndex={0}
                        data-team-id='T040916UHV1'
                        aria-label='Status'
                        aria-multiline='false'
                        aria-autocomplete='list'
                        aria-expanded='false'
                        aria-owns='chat_input_tab_ui'
                        spellCheck='true'
                        onInput={handleInput}
                     >
                        <p>
                           <br />
                        </p>
                     </div>
                     {inputValue ? (
                        ''
                     ) : (
                        <div
                           className='status-modal__input-placeholder'
                           aria-hidden='true'
                        >
                           What’s your status?
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
