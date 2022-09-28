import React from 'react';
import { useCookies } from 'react-cookie';
import './MenuUserItem.scss';
import { MenuUserItemPropsType } from './MenuUserItemType';

export const MenuUserItem: React.FC<MenuUserItemPropsType> = ({
   currentUserName,
}) => {
   const [cookies] = useCookies(['pause']);

   return (
      <div className='avatar-menu__user user'>
         <div className='user__container'>
            <div className='user__icon-container'>
               <span className='user__icon'>
                  <img
                     src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-48'
                     alt='image'
                     className='user__icon-image'
                  />
               </span>
            </div>
            <div className='user__info'>
               <div className='user__name-container'>
                  <span className='user__name'>{currentUserName}</span>
               </div>
               <span className='user__presence'>
                  <i
                     className={`${
                        cookies.pause === 'true'
                           ? 'user__presence-icon-pause'
                           : 'user__presence-icon'
                     }`}
                  />
                  Active
               </span>
            </div>
         </div>
      </div>
   );
};
