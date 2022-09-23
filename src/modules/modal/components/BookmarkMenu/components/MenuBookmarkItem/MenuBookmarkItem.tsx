import React from 'react';
import './MenuBookmarkItem.scss';
import { MenuBookmarkItemPropsType } from './MenuBookmarkItemType';

export const MenuBookmarkItem: React.FC<MenuBookmarkItemPropsType> = ({
   itemText,
   itemDescriptionText,
   children,
   onClick
}) => {
   return (
      <div className='container-menu__item item' onClick={onClick}>
         <button className='item__button item__button--bookmark'>
            <div
               className='item__icon-container item__icon-container--bookmark'
               data-qa='menu-item-icon'
               role='presentation'
            >
               {children}
            </div>
            <div className='item__label item__label--bookmark'>
               {itemText}
               <div className='item__bookmark-description'>
                  {itemDescriptionText}
               </div>
            </div>
         </button>
      </div>
   );
};
