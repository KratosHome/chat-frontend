import React from 'react';
import { MenuItem } from '../../../MenuItem';
import { RoomWorkspacesMenuPropsType } from './RoomWorkspacesMenuType';
import './RoomWorkspacesMenu.scss';

export const RoomWorkspacesMenu: React.FC<RoomWorkspacesMenuPropsType> = ({
   onMouseOut,
   onMouseOver,
}) => {
   return (
      <div
         className='container-menu room-workspaces-menu'
         onMouseOut={onMouseOut}
         onMouseOver={onMouseOver}
      >
         <div className='container-menu__items'>
            <MenuItem itemText={'Sign in to another workspace'} />
            <MenuItem itemText={'Create a new workspace'} />
            <MenuItem itemText={'Find workspaces'} />
         </div>
      </div>
   );
};
