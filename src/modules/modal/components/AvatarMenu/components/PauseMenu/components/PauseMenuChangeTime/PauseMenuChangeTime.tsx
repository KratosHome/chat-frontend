import React from 'react';
import { MenuItem } from '../../../../../MenuItem';
import './PauseMenuChangeTime.scss';
import { PauseMenuChangeTimePropsType } from './PauseMenuChangeTimeType';

export const PauseMenuChangeTime: React.FC<PauseMenuChangeTimePropsType> = ({
   onMouseOut,
   onMouseOver,
   setIsModalAvatarOpen,
}) => {
   return (
      <div
         className='container-menu pause-menu-change-time'
         onMouseOut={onMouseOut}
         onMouseOver={onMouseOver}
      >
         <div className='container-menu__items'>
            <MenuItem
               itemText='For 30 minutes'
               setIsModalOpen={setIsModalAvatarOpen}
               timeValue={30}
            />
            <MenuItem
               itemText='For 1 hour'
               setIsModalOpen={setIsModalAvatarOpen}
               timeValue={1}
            />
            <MenuItem
               itemText='For 2 hours'
               setIsModalOpen={setIsModalAvatarOpen}
               timeValue={2}
            />
            <MenuItem
               itemText='Until tomorrow'
               setIsModalOpen={setIsModalAvatarOpen}
               timeValue={24}
            />
         </div>
      </div>
   );
};
