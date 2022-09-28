import React from 'react';
import { MenuItem } from '../../../MenuItem';
import { MenuItemWithLink } from '../../../MenuItemWithLink';
import { RoomToolsMenuPropsType } from './RoomToolsMenuType';
import './RoomToolsMenu.scss';

export const RoomToolsMenu: React.FC<RoomToolsMenuPropsType> = ({
   onMouseOut,
   onMouseOver,
}) => {
   return (
      <div
         className='container-menu room-tools-menu'
         onMouseOut={onMouseOut}
         onMouseOver={onMouseOver}
      >
         <div className='container-menu__items'>
            <MenuItem itemText={'Workflow builder'} />
            <MenuItemWithLink itemText={'Analytics'} />
         </div>
      </div>
   );
};
