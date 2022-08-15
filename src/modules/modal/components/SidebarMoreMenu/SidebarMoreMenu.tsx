import React from 'react';
import { MenuItemWithIcon } from '../MenuItemWithIcon';
import { MenuSeparatorItem } from '../MenuSeparatorItem';

export const SidebarMoreMenu: React.FC = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <MenuItemWithIcon
               itemText={'Direct messages'}
               shortcutText={'Ctrl+Shift+K'}
               itemPaddingClass={'item__button-more-menu'}
            >
               <span className='item__icon' data-qa='dm'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g
                        fill='none'
                        stroke='currentColor'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                     >
                        <path d='M 2.714 15.432 a 4.25 4.25 0 1 1 1.854 1.854 l -2.318 0.464 l 0.464 -2.318 Z'></path>
                        <path
                           stroke-linecap='round'
                           d='M 14 12.966 a 5.4 5.4 0 0 0 0.75 -0.316 l 3 0.6 l -0.6 -3 A 5.5 5.5 0 1 0 6.952 6.265'
                        ></path>
                     </g>
                  </svg>
               </span>
            </MenuItemWithIcon>
            <MenuSeparatorItem />
            <MenuItemWithIcon
               itemText={'All channels'}
               shortcutText={'Ctrl+Shift+L'}
               itemPaddingClass={'item__button-more-menu'}
            >
               <span className='item__icon' data-qa='share-other-alt'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' stroke-width='1.5'>
                        <path
                           stroke-linecap='round'
                           d='m 6.25 3.75 l -2.5 12.5 m 4 0 l 0.95 -4.75 M 2.75 7.25 h 4 m -5 5.5 h 9.5'
                        ></path>
                        <circle cx='13' cy='7' r='3.25'></circle>
                        <path
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           d='m 15.5 9.5 l 1.75 1.75'
                        ></path>
                     </g>
                  </svg>
               </span>
            </MenuItemWithIcon>
            <MenuItemWithIcon
               itemText={'Files'}
               itemPaddingClass={'item__button-more-menu'}
            >
               <span className='item__icon' data-qa='all-files-alt'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g
                        fill='none'
                        stroke='currentColor'
                        stroke-linejoin='round'
                        stroke-width='1.5'
                     >
                        <path d='M 9.258 1.964 a 1.4 1.4 0 0 1 1.484 0 l 6.118 3.824 a 0.84 0.84 0 0 1 0 1.424 l -6.118 3.824 a 1.4 1.4 0 0 1 -1.484 0 L 3.14 7.212 a 0.84 0.84 0 0 1 0 -1.424 l 6.118 -3.824 Z'></path>
                        <path
                           stroke-linecap='round'
                           d='m 17.26 10.463 l -6.52 4.074 a 1.397 1.397 0 0 1 -1.482 0 l -6.523 -4.078'
                        ></path>
                        <path
                           stroke-linecap='round'
                           d='m 17.26 13.963 l -6.52 4.074 a 1.397 1.397 0 0 1 -1.482 0 l -6.523 -4.078'
                        ></path>
                     </g>
                  </svg>
               </span>
            </MenuItemWithIcon>
            <MenuItemWithIcon
               itemText={'People & user groups'}
               shortcutText={'Ctrl+Shift+E'}
               itemPaddingClass={'item__button-more-menu'}
            >
               <span className='item__icon' data-qa='team-directory'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' stroke-width='1.5'>
                        <path
                           stroke-linecap='round'
                           d='M 3.75 3.75 v -0.5 a 1 1 0 0 1 1 -1 h 10 a 2 2 0 0 1 2 2 v 11.5 a 2 2 0 0 1 -2 2 h -10 a 1 1 0 0 1 -1 -1 v -0.5'
                        ></path>
                        <path
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           d='M 4.25 6.75 h -2 m 2 3.25 h -2 m 2 3.25 h -2'
                        ></path>
                        <path d='M 13.683 12.769 c 0.18 0.522 -0.28 0.981 -0.833 0.981 h -4.7 c -0.552 0 -1.013 -0.46 -0.833 -0.981 c 0.352 -1.025 1.299 -2.019 3.183 -2.019 s 2.83 0.994 3.183 2.019 Z M 12.25 8 c 0 1.137 -0.7 2.275 -1.75 2.275 S 8.75 9.137 8.75 8 c 0 -1.138 0.875 -1.75 1.75 -1.75 s 1.75 0.612 1.75 1.75 Z'></path>
                     </g>
                  </svg>
               </span>
            </MenuItemWithIcon>
            <MenuItemWithIcon
               itemText={'Apps'}
               itemPaddingClass={'item__button-more-menu'}
            >
               <span className='item__icon' data-qa='gn-menu'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='currentColor'>
                        <circle cx='10' cy='10' r='1.5'></circle>
                        <circle cx='10' cy='15.5' r='1.5'></circle>
                        <circle cx='4.5' cy='10' r='1.5'></circle>
                        <circle cx='4.5' cy='15.5' r='1.5'></circle>
                        <circle cx='15.5' cy='10' r='1.5'></circle>
                        <circle cx='15.5' cy='15.5' r='1.5'></circle>
                        <circle cx='10' cy='4.5' r='1.5'></circle>
                        <circle cx='4.5' cy='4.5' r='1.5'></circle>
                        <circle cx='15.5' cy='4.5' r='1.5'></circle>
                     </g>
                  </svg>
               </span>
            </MenuItemWithIcon>
            <MenuSeparatorItem />
            <div className='container-menu__item item'>
               <button className='item__button'>
                  <div className='item__label item__label-customize'>
                     Customize this list in your{' '}
                     <strong className='item__label-highlight'>
                        preferences
                     </strong>
                     .
                  </div>
               </button>
            </div>
         </div>
      </div>
   );
};
