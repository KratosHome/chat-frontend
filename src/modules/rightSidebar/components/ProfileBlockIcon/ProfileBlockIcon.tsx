import React from 'react';
import './ProfileBlockIcon.scss';
import { ProfileBlockIconPropsType } from './ProfileBlockIconType';

export const ProfileBlockIcon: React.FC<ProfileBlockIconPropsType> = ({
   children,
}) => {
   return (
      <div className='profile__contact-info-icon-container'>
         <i className='profile__contact-info-icon'>{children}</i>
      </div>
   );
};
