import React from 'react';
import { MenuHistoryItemType } from './MenuHistoryItemType';
import './MenuHistoryItem.scss';

export const MenuHistoryItem: React.FC<MenuHistoryItemType> = ({
   visitedChannel,
}) => {
   return (
      <div className='container-menu__item item'>
         <button className='item__button'>
            <div className='item__label'>
               <div className='history-item'>
                  <span className='history-item__icon'>
                     <svg
                        data-som='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeWidth='1.5'
                           d='m 9 3.75 l -2.5 14.5 m 7.25 -14.5 l -2.5 14.5 m -7.5 -10.5 h 13.5 m -14.5 7 h 13.5'
                        ></path>
                     </svg>
                  </span>
                  <div className='history-item__content'>
                     <span className='history-item__text'>
                        {visitedChannel}
                     </span>
                  </div>
               </div>
            </div>
         </button>
      </div>
   );
};
