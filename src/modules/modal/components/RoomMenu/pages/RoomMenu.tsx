import React, { useState } from 'react';
import { MenuItem } from '../../MenuItem';
import { MenuOpenAppItem } from '../components/MenuOpenAppItem';
import { MenuPlansItem } from '../components/MenuPlansItem';
import { MenuRoomNameItem } from '../components/MenuRoomNameItem';
import { MenuSeparatorItem } from '../../MenuSeparatorItem';
import { RoomSettingsMenu } from '../components/RoomSettingsMenu';
import { RoomToolsMenu } from '../components/RoomToolsMenu';
import { RoomWorkspacesMenu } from '../components/RoomWorkspacesMenu';

export const RoomMenu: React.FC = () => {
   const [isRoomSettingsMenuOpen, setIsRoomSettingsMenuOpen] =
      useState<boolean>(false);
   const [isRoomToolsMenuOpen, setIsRoomToolsMenuOpen] =
      useState<boolean>(false);
   const [isRoomWorkspacesMenuOpen, setIsRoomWorkspacesMenuOpen] =
      useState<boolean>(false);

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
            <div
               className='container-menu__submenu'
               onMouseOut={() => setIsRoomSettingsMenuOpen(false)}
               onMouseOver={() => setIsRoomSettingsMenuOpen(true)}
            >
               <MenuItem
                  isSubmenu={true}
                  itemText={'Settings & administration'}
               />
            </div>
            <MenuSeparatorItem />
            <div
               className='container-menu__submenu'
               onMouseOut={() => setIsRoomToolsMenuOpen(false)}
               onMouseOver={() => setIsRoomToolsMenuOpen(true)}
            >
               <MenuItem isSubmenu={true} itemText={'Tools'} />
            </div>
            <MenuSeparatorItem />
            <MenuItem itemText={'Sing in to Company Name on mobile'} />
            <MenuItem itemText={'Sing out of Company Name'} />
            <MenuSeparatorItem />
            <div
               className='container-menu__submenu'
               onMouseOut={() => setIsRoomWorkspacesMenuOpen(false)}
               onMouseOver={() => setIsRoomWorkspacesMenuOpen(true)}
            >
               <MenuItem isSubmenu={true} itemText={'Add workspaces'} />
            </div>
            <MenuOpenAppItem />
         </div>
         {isRoomSettingsMenuOpen && (
            <RoomSettingsMenu
               onMouseOut={() => setIsRoomSettingsMenuOpen(false)}
               onMouseOver={() => setIsRoomSettingsMenuOpen(true)}
            />
         )}
         {isRoomToolsMenuOpen && (
            <RoomToolsMenu
               onMouseOut={() => setIsRoomToolsMenuOpen(false)}
               onMouseOver={() => setIsRoomToolsMenuOpen(true)}
            />
         )}
         {isRoomWorkspacesMenuOpen && (
            <RoomWorkspacesMenu
               onMouseOut={() => setIsRoomWorkspacesMenuOpen(false)}
               onMouseOver={() => setIsRoomWorkspacesMenuOpen(true)}
            />
         )}
      </div>
   );
};
