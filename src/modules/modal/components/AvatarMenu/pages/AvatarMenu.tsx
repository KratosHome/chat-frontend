import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { MenuItem } from '../../MenuItem';
import { MenuSeparatorItem } from '../../MenuSeparatorItem';
import { MenuUserItem } from '../components/MenuUserItem';
import { MenuUserStatusItem } from '../components/MenuUserStatusItem';
import { PauseNotifications } from '../components/PauseNotifications';
import { AvatarMenuPropsType } from './AvatarMenuType';
import { PauseMenu } from '../components/PauseMenu/pages';
import PopupState from '../../../../../store/popup';
import './AvatarMenu.scss';

export const AvatarMenu: React.FC<AvatarMenuPropsType> = ({
   currentUserName,
   setIsModalAvatarOpen,
   setIsModalSetStatusOpen,
   setIsModalPreferencesOpen,
}) => {
   const [cookies] = useCookies(['pause']);

   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
                     isMenuOpen ? 'avatar-menu__popup-active' : ''
                  }`}
                  onMouseOver={() => setIsMenuOpen(true)}
                  onMouseOut={() => setIsMenuOpen(false)}
               >
                  <MenuItem isSubmenu={true} itemText={'Pause notifications'} />
               </div>
               <MenuSeparatorItem />
               <MenuItem
                  itemText={'Profile'}
                  onClick={PopupState.setIsPopupOpen}
                  setIsModalOpen={setIsModalAvatarOpen}
               />
               <MenuItem
                  itemText={'Preferences'}
                  onClick={() => setIsModalPreferencesOpen(true)}
                  setIsModalOpen={setIsModalAvatarOpen}
               />
               <MenuSeparatorItem />
               <MenuItem itemText={'Sign out of Company Name'} />
            </div>
         </div>
         {!cookies.pause && isMenuOpen ? (
            <PauseNotifications
               onMouseOver={() => setIsMenuOpen(true)}
               onMouseOut={() => setIsMenuOpen(false)}
               setIsModalAvatarOpen={setIsModalAvatarOpen}
            />
         ) : null}
         {cookies.pause === 'true' && isMenuOpen ? (
            <PauseMenu
               onMouseOver={() => setIsMenuOpen(true)}
               onMouseOut={() => setIsMenuOpen(false)}
               setIsModalAvatarOpen={setIsModalAvatarOpen}
            />
         ) : null}
      </>
   );
};
