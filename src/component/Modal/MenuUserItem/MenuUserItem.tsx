import React from 'react';
import './MenuUserItem.scss';

export const MenuUserItem: React.FC = () => {
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
                  <span className='user__name'>Dmitrii Iakovenko</span>
               </div>
               <span className='user__presence'>
                  <i className='user__presence-icon' />
                  Active
               </span>
            </div>
         </div>
      </div>
   );
};
