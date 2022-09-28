import React from 'react';
import { MenuItem } from '../../../MenuItem';
import { MenuSeparatorItem } from '../../../MenuSeparatorItem';
import { RoomSettingsMenuPropsType } from './RoomSettingsMenuType';
import './RoomSettingsMenu.scss';

export const RoomSettingsMenu: React.FC<RoomSettingsMenuPropsType> = ({
   onMouseOut,
   onMouseOver,
}) => {
   return (
      <div
         className='container-menu room-settings-menu'
         onMouseOut={onMouseOut}
         onMouseOver={onMouseOver}
      >
         <div className='container-menu__items'>
            <div className='container-menu__header'>Settings</div>
            <MenuItem itemText={'Workspace settings'} />
            <MenuItem itemText={'Customize Company Name'} />
            <MenuItem itemText={'Edit workspace details'} />
            <MenuSeparatorItem />
            <div className='container-menu__header'>Administration</div>
            <MenuItem itemText={'Manage members'} />
            <MenuItem itemText={'Manage apps'} />
         </div>
      </div>
   );
};
