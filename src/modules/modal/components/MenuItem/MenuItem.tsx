import React from 'react';
import { MenuItemType } from './MenuItemType';
import './MenuItem.scss';

export const MenuItem: React.FC<MenuItemType> = ({
   isSubmenu,
   itemText,
   onClick,
   setIsModalAvatarOpen,
}) => {
   const handleClick = () => {
      if (onClick && setIsModalAvatarOpen) {
         onClick(true);
         setIsModalAvatarOpen(false);
      }
   };

   return (
      <div className='container-menu__item item' onClick={handleClick}>
         <button
            className={`item__button ${
               isSubmenu ? 'item__button--submenu' : ''
            }`}
         >
            {itemText === 'Set yourself as away' ? (
               <div className='item__label'>
                  Set yourself as <strong>away</strong>
               </div>
            ) : (
               <div className='item__label'>{itemText}</div>
            )}
            {isSubmenu ? (
               <div className='item__submenu-indicator'>
                  <svg data-som='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M 8.25 6.25 L 12 10 l -3.75 3.75'
                     ></path>
                  </svg>
               </div>
            ) : (
               ''
            )}
         </button>
      </div>
   );
};
