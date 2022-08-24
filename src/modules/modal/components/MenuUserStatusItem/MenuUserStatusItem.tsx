import React, { useState } from 'react';
import './MenuUserStatusItem.scss';

export const MenuUserStatusItem: React.FC = () => {
   const [focusStatusButton, setFocusStatusButton] = useState<boolean>(false);

   const handleMouseOver = () => {
      setFocusStatusButton(true);
   };

   const handleMouseOut = () => {
      setFocusStatusButton(false);
   };

   return (
      <div className='avatar-menu__user-status user-status'>
         <button
            className='user-status__button'
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
         >
            <div className='user-status__icon'>
               <svg
                  className={`user-status__icon-smile ${
                     focusStatusButton ? '' : 'active'
                  }`}
                  data-ufvi='true'
                  viewBox='0 0 20 20'
               >
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
               <svg
                  className={`user-status__icon-happy ${
                     focusStatusButton ? 'active' : ''
                  }`}
                  data-ufvi='true'
                  viewBox='0 0 20 20'
               >
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
                        fill='currentColor'
                        d='M10 14.961c1.43 0 2.86-.788 3.477-2.364.22-.56-.258-1.097-.86-1.097H7.383c-.602 0-1.08.537-.86 1.097.616 1.576 2.047 2.364 3.477 2.364Z'
                     ></path>
                  </g>
               </svg>
            </div>
            Update your status
         </button>
      </div>
   );
};
