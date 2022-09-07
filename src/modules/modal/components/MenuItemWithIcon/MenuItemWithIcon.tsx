import React from 'react';
import { MenuItemWithIconPropsType } from './MenuItemWithIconType';
import './MenuItemWithIcon.scss';

export const MenuItemWithIcon: React.FC<MenuItemWithIconPropsType> = ({
   itemText,
   children,
   shortcutText,
   itemPaddingClass,
   isDelete,
}) => {
   return (
      <div className='container-menu__item item'>
         <button
            className={`item__button ${itemPaddingClass} ${
               isDelete ? 'item__button--delete' : ''
            }`}
         >
            {children ? (
               <div
                  className='item__icon-container'
                  data-qa='menu-item-icon'
                  role='presentation'
               >
                  {children}
               </div>
            ) : (
               ''
            )}
            <div
               className={`item__label ${
                  isDelete ? 'item__label--delete' : ''
               }`}
            >
               {itemText}
            </div>
            {shortcutText ? (
               <div className='item__shortcut'>{shortcutText}</div>
            ) : (
               ''
            )}
         </button>
      </div>
   );
};
