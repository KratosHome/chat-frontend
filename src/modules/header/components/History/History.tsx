import React, { useState } from 'react';
import { HoverIcon } from '../../../common/HoverIcon';
import { HistoryMenu } from '../../../modal';
import { ReactModal } from '../../../modal';
import './History.scss';

export const History: React.FC = () => {
   const historyMenuPosition = 'history-menu-position';

   const [isModalHistoryOpen, setIsModalHistoryOpen] = useState<boolean>(false);
   const [isHoverHistory, setIsHoverHistory] = useState<boolean>(false);

   const handleHistoryClick = () => {
      setIsModalHistoryOpen(true);
   };

   const handleHistoryClose = () => {
      setIsModalHistoryOpen(false);
   };

   const handleHistoryMouseOver = () => {
      setIsHoverHistory(!isHoverHistory);
   };

   const handleHistoryMouseOut = () => {
      setIsHoverHistory(!isHoverHistory);
   };

   return (
      <>
         <div className="header__history">
            <a
               className="header__history-button"
               onClick={handleHistoryClick}
               onMouseOver={handleHistoryMouseOver}
               onMouseOut={handleHistoryMouseOut}
            >
               <svg data-0v2="true" aria-hidden="true" viewBox="0 0 20 20">
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                     <circle cx="10" cy="10" r="8.25"></circle>
                     <path
                        stroke-linecap="round"
                        d="M 10 5.75 v 4.75 h 3.75"
                     ></path>
                  </g>
               </svg>
            </a>
            <HoverIcon
               isHover={isHoverHistory}
               marginArrowLeft={'-3px'}
               marginBlockTop={'76px'}
               marginBlockRight={'-34px'}
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
