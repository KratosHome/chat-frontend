import React from 'react';
import { MenuItem } from '../../MenuItem';
import { MenuOpenAppItem } from '../components/MenuOpenAppItem';
import { MenuPlansItem } from '../components/MenuPlansItem';
import { MenuRoomNameItem } from '../components/MenuRoomNameItem';
import { MenuSeparatorItem } from '../../MenuSeparatorItem';

export const RoomMenu: React.FC = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <MenuRoomNameItem />
            <MenuSeparatorItem />
            <MenuPlansItem />
            <MenuSeparatorItem />
            <MenuItem itemText={'Invite people to Company Name'} />
            <MenuItem itemText={'Create a channel'} />
            <MenuSeparatorItem />
            <MenuItem itemText={'Preferences'} />
            <div className='container-menu__submenu'>
               <MenuItem
                  isSubmenu={true}
                  itemText={'Settings & administration'}
               />
            </div>
            <MenuSeparatorItem />
            <div className='container-menu__submenu'>
               <MenuItem isSubmenu={true} itemText={'Tools'} />
            </div>
            <MenuSeparatorItem />
            <MenuItem itemText={'Sing in to Company Name on mobile'} />
            <MenuItem itemText={'Sing out of Company Name'} />
            <MenuSeparatorItem />
            <div className='container-menu__submenu'>
               <MenuItem isSubmenu={true} itemText={'Add workspaces'} />
            </div>
            <MenuOpenAppItem />
         </div>
      </div>
   );
};
