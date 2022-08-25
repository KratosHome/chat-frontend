import React, { useState } from 'react';
import { HoverIcon } from '../../../common/HoverIcon';
import { HistoryMenu } from '../../../modal';
import { ReactModal } from '../../../modal';
import './History.scss';

export const History: React.FC = () => {
   const historyMenuPosition = 'history-menu-position';

   const [isModalHistoryOpen, setIsModalHistoryOpen] = useState<boolean>(false);
   const [isHoverHistory, setIsHoverHistory] = useState<boolean>(false);

   const handleHistoryClose = () => {
      setIsModalHistoryOpen(!isModalHistoryOpen);
   };

   return (
      <>
         <div className='header__history'>
            <a
               className='header__history-button'
               onClick={() => setIsModalHistoryOpen(!isModalHistoryOpen)}
               onMouseOver={() => setIsHoverHistory(true)}
               onMouseOut={() => setIsHoverHistory(false)}
            >
               <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                  <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                     <circle cx='10' cy='10' r='8.25'></circle>
                     <path
                        strokeLinecap='round'
                        d='M 10 5.75 v 4.75 h 3.75'
                     ></path>
                  </g>
               </svg>
            </a>
            <HoverIcon
               isHover={isHoverHistory}
               marginArrowLeft={'-9px'}
               marginBlockTop={'76px'}
               marginBlockRight={'-40px'}
            >
               <div>History</div>
            </HoverIcon>
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
