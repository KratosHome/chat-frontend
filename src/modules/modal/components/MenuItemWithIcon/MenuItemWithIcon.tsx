import React from 'react';
import { MenuItemWithIconPropsType } from './MenuItemWithIconType';

export const MenuItemWithIcon: React.FC<MenuItemWithIconPropsType> = ({
   itemText,
   children,
   shortcutText,
   itemPaddingClass,
}) => {
   return (
      <div className='container-menu__item item'>
         <button className={`item__button ${itemPaddingClass}`}>
            <div
               className='item__icon-container'
               data-qa='menu-item-icon'
               role='presentation'
            >
               {children}
            </div>
            <div className='item__label'>{itemText}</div>
            {shortcutText ? (
               <div className='item__shortcut'>{shortcutText}</div>
            ) : (
               ''
            )}
         </button>
      </div>
   );
};
