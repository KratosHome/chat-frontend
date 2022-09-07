import React from 'react';
import { MenuItem } from '../MenuItem';
import { MenuItemWithIcon } from '../MenuItemWithIcon';
import { MenuSeparatorItem } from '../MenuSeparatorItem';

export const MessageActionsMoreMenu: React.FC = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <MenuItem itemText={'Turn off notifications for replies'} />
            <MenuSeparatorItem />
            <MenuItemWithIcon itemText={'Mark unread'} shortcutText={'U'} />
            <MenuItem isSubmenu={true} itemText={'Remind me about this'} />
            <MenuSeparatorItem />
            <MenuItem itemText={'Copy link'} />
            <MenuSeparatorItem />
            <MenuItemWithIcon itemText={'Pin to channel'} shortcutText={'P'} />
            <MenuSeparatorItem />
            <MenuItemWithIcon itemText={'Edit message'} shortcutText={'E'} />
            <MenuItemWithIcon
               itemText={'Delete message'}
               shortcutText={'Delete'}
               isDelete={true}
            />
            <MenuSeparatorItem />
            <div className='container-menu__item item'>
               <button className='item__button'>
                  <div className='item__label'>Add a message shortcut... </div>
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
         </div>
      </div>
   );
};
