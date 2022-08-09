import React, { useState } from 'react';
import { HistoryMenu } from '../../Modal/HistoryMenu';
import { ReactModal } from '../../ReactModal';
import './History.scss';

export const History: React.FC = () => {
   const historyMenuPosition = 'history-menu-position';

   const [isModalHistoryOpen, setIsModalHistoryOpen] = useState<boolean>(false);

   const handleHistoryClick = () => {
      setIsModalHistoryOpen(true);
   };

   const handleHistoryClose = () => {
      setIsModalHistoryOpen(false);
   };

   return (
      <>
         <div className='header__history'>
            <a className='header__history-button' onClick={handleHistoryClick}>
               <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                  <g fill='none' stroke='currentColor' stroke-width='1.5'>
                     <circle cx='10' cy='10' r='8.25'></circle>
                     <path
                        stroke-linecap='round'
                        d='M 10 5.75 v 4.75 h 3.75'
                     ></path>
                  </g>
               </svg>
            </a>
         </div>
         <ReactModal
            isModalOpen={isModalHistoryOpen}
            onClose={handleHistoryClose}
            modalPosition={historyMenuPosition}
         >
            <HistoryMenu />
         </ReactModal>
      </>
   );
};
