import React from 'react';
import { useCookies } from 'react-cookie';
import { MenuItemType } from './MenuItemType';
import './MenuItem.scss';

export const MenuItem: React.FC<MenuItemType> = ({
   isSubmenu,
   itemText,
   onClick,
   setIsModalOpen,
   timeValue,
   isDelete,
}) => {
   const timeValueObject: { [key: number]: Date } = {
      1: new Date(new Date().getTime() + 1 * 60 * 60 * 1000),
      2: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
      24: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      30: new Date(new Date().getTime() + 30 * 60 * 1000),
   };

   const [cookies, setCookie, removeCookie] = useCookies(['pause']);
   const [timeCookies, setTimeCookie, removeTimeCookie] = useCookies([
      'pauseTime',
   ]);

   const handleClick = () => {
      if (onClick && setIsModalOpen) {
         onClick(true);
         setIsModalOpen(false);
      }

      if (timeValue && setIsModalOpen) {
         setCookie('pause', 'true', {
            path: '/',
            expires: timeValueObject[timeValue],
         });
         setTimeCookie('pauseTime', timeValueObject[timeValue].toUTCString(), {
            path: '/',
            expires: timeValueObject[timeValue],
         });
         setIsModalOpen(false);
      }

      if (isDelete && setIsModalOpen) {
         removeCookie('pause');
         removeTimeCookie('pauseTime');
         setIsModalOpen(false);
      }
   };

   return (
      <div className='container-menu__item item' onClick={handleClick}>
         <button
            className={`item__button ${
               isSubmenu ? 'item__button--submenu' : ''
            } ${isDelete ? 'item__button--delete' : ''}`}
         >
            {itemText === 'Set yourself as away' ? (
               <div className='item__label'>
                  Set yourself as <strong>away</strong>
               </div>
            ) : (
               <div
                  className={`item__label ${
                     isDelete ? 'item__label--delete' : ''
                  }`}
               >
                  {itemText}
               </div>
            )}
            {cookies.pause === 'true' && isSubmenu ? (
               <div style={{ fontSize: 15, marginRight: 10 }}>On</div>
            ) : (
               ''
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
