import React from 'react';
import { MenuItem } from '../MenuItem';
import { MenuSeparatorItem } from '../MenuSeparatorItem';
import { MenuUserItem } from '../MenuUserItem';
import { MenuUserStatusItem } from '../MenuUserStatusItem';
import { AvatarMenuPropsType } from './AvatarMenuType';

export const AvatarMenu: React.FC<AvatarMenuPropsType> = ({
   currentUserName,
}) => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <MenuUserItem currentUserName={currentUserName} />
            <MenuUserStatusItem />
            <MenuItem itemText={'Set yourself as away'} />
            <div className='container-menu__submenu'>
               <MenuItem isSubmenu={true} itemText={'Pause notifications'} />
            </div>
            <MenuSeparatorItem />
            <MenuItem itemText={'Profile'} />
            <MenuItem itemText={'Preferences'} />
            <MenuSeparatorItem />
            <MenuItem itemText={'Sign out of Company Name'} />
         </div>
      </div>
   );
};
