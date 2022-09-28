import React from 'react';
import { MenuItemWithLinkPropsType } from './MenuItemWithLinkType';

export const MenuItemWithLink: React.FC<MenuItemWithLinkPropsType> = ({
   itemText,
}) => {
   return (
      <div className='container-menu__item item'>
         <button className='item__button'>
            <div className='item__label'>{itemText}</div>
            <div
               className='item__link-icon'
               data-qa='menu_item_link_icon'
               role='presentation'
            >
               <svg
                  data-18x='true'
                  aria-hidden='true'
                  data-qa='menu_item_link_indicator'
                  viewBox='0 0 20 20'
               >
                  <g
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeWidth='1.5'
                  >
                     <path
                        strokeLinejoin='round'
                        d='m 8.75 11.25 l 8 -8 m 0 0 h -5 m 5 0 v 5'
                     ></path>
                     <path d='M 8.25 5.25 h -2 a 3 3 0 0 0 -3 3 v 5.5 a 3 3 0 0 0 3 3 h 5.5 a 3 3 0 0 0 3 -3 v -2'></path>
                  </g>
               </svg>
            </div>
         </button>
      </div>
   );
};
