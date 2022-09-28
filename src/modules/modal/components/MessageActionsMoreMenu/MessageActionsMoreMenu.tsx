import React from 'react';
import { MenuItem } from '../MenuItem';
import { MenuItemWithIcon } from '../MenuItemWithIcon';
import { MenuItemWithLink } from '../MenuItemWithLink';
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
            <MenuItemWithLink itemText={'Add a message shortcut...'} />
         </div>
      </div>
   );
};
