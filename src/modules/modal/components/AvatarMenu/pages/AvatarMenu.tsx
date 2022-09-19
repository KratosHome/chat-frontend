import React, { useEffect, useState } from 'react';
import { MenuItem } from '../../MenuItem';
import { MenuSeparatorItem } from '../../MenuSeparatorItem';
import { MenuUserItem } from '../components/MenuUserItem';
import { MenuUserStatusItem } from '../components/MenuUserStatusItem';
import { PauseNotifications } from '../components/PauseNotifications';
import { AvatarMenuPropsType } from './AvatarMenuType';
import './AvatarMenu.scss';
import PopupState from '../../../../../store/popup';

export const AvatarMenu: React.FC<AvatarMenuPropsType> = ({
   currentUserName,
   setIsModalAvatarOpen,
   setIsModalSetStatusOpen,
   setIsModalPreferencesOpen
}) => {
   const [isModalPauseNotifications, setIsModalPauseNotifications] =
      useState<boolean>(false);

   return (
      <>
         <div className='container-menu'>
            <div className='container-menu__items'>
               <MenuUserItem currentUserName={currentUserName} />
               <MenuUserStatusItem
                  setIsModalAvatarOpen={setIsModalAvatarOpen}
                  setIsModalSetStatusOpen={setIsModalSetStatusOpen}
               />
               <MenuItem itemText={'Set yourself as away'} />
               <div
                  className={`container-menu__submenu ${
                     isModalPauseNotifications
                        ? 'avatar-menu__popup-active'
                        : ''
                  }`}
                  onMouseOver={() => setIsModalPauseNotifications(true)}
                  onMouseOut={() => setIsModalPauseNotifications(false)}
               >
                  <MenuItem isSubmenu={true} itemText={'Pause notifications'} />
               </div>
               <MenuSeparatorItem />
               <MenuItem
                  itemText={'Profile'}
                  onClick={PopupState.setIsPopupOpen}
                  setIsModalAvatarOpen={setIsModalAvatarOpen}
               />
               <MenuItem 
                  itemText={'Preferences'} 
                  onClick={()=>setIsModalPreferencesOpen(true)} 
                  setIsModalAvatarOpen={setIsModalAvatarOpen} />
               <MenuSeparatorItem />
               <MenuItem itemText={'Sign out of Company Name'} />
            </div>
         </div>
         {isModalPauseNotifications ? (
            <PauseNotifications
               onMouseOver={() => setIsModalPauseNotifications(true)}
               onMouseOut={() => setIsModalPauseNotifications(false)}
            />
         ) : null}
      </>
   );
};

