import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { format } from 'date-fns';
import { MenuItem } from '../../../../MenuItem';
import { MenuSeparatorItem } from '../../../../MenuSeparatorItem';
import './PauseMenu.scss';
import { PauseMenuPropsType } from './PauseMenuType';
import { PauseMenuChangeTime } from '../components/PauseMenuChangeTime';

export const PauseMenu: React.FC<PauseMenuPropsType> = ({
   onMouseOut,
   onMouseOver,
   setIsModalAvatarOpen,
}) => {
   const [cookies] = useCookies(['pauseTime']);

   const [isMenuChangeTimeOpen, setIsMenuChangeTimeOpen] =
      useState<boolean>(false);

   return (
      <div
         className='container-menu pause-menu'
         onMouseOut={onMouseOut}
         onMouseOver={onMouseOver}
      >
         <div className='container-menu__items' style={{ paddingTop: 0 }}>
            <div className='pause-menu__header'>
               <div className='pause-menu__status'>
                  <div className='pause-menu__status-text'>
                     <strong>Do Not Disturb</strong>
                  </div>
                  <div className='pause-menu__status-time'>
                     {`Notifications paused until ${format(
                        new Date(cookies.pauseTime),
                        'H:mm a',
                     )}`}
                  </div>
               </div>
            </div>
            <MenuItem
               itemText={'Resume notifications'}
               isDelete={true}
               setIsModalOpen={setIsModalAvatarOpen}
            />
            <div
               className={`container-menu__submenu ${
                  isMenuChangeTimeOpen ? 'pause-menu__popup-active' : ''
               }`}
               onMouseOver={() => setIsMenuChangeTimeOpen(true)}
               onMouseOut={() => setIsMenuChangeTimeOpen(false)}
            >
               <MenuItem itemText={'Adjust time'} isSubmenu={true} />
            </div>
            <MenuSeparatorItem />
            <MenuItem itemText={'Set a notification schedule'} />
         </div>
         {isMenuChangeTimeOpen && (
            <PauseMenuChangeTime
               onMouseOver={() => setIsMenuChangeTimeOpen(true)}
               onMouseOut={() => setIsMenuChangeTimeOpen(false)}
               setIsModalAvatarOpen={setIsModalAvatarOpen}
            />
         )}
      </div>
   );
};
