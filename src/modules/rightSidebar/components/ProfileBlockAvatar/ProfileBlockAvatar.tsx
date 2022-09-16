import React from 'react';
import './ProfileBlockAvatar.scss';

export const ProfileBlockAvatar: React.FC = () => {
   return (
      <div className='profile__avatar'>
         <div className='profile__avatar-img-container'>
            <img
               src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-512'
               alt='Profile photo'
               className='profile__avatar-img'
            />
            <div className='profile__avatar-img-restriction'>
               <span className='profile__avatar-text'>Workspace owner</span>
            </div>
         </div>
      </div>
   );
};
