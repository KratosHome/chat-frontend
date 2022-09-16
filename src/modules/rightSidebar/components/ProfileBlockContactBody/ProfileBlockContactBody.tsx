import React from 'react';
import './ProfileBlockContactBody.scss';
import { ProfileBlockContactBodyPropsType } from './ProfileBlockContactBodyType';

export const ProfileBlockContactBody: React.FC<
   ProfileBlockContactBodyPropsType
> = ({ titleText, children, additionalClass }) => {
   return (
      <div className={`profile__contact-info-body ${additionalClass}`}>
         <div className='profile__contact-info-wrapper'>
            <div className='profile__contact-info-title'>{titleText}</div>
            <div className='profile__contact-info-field'>{children}</div>
         </div>
      </div>
   );
};
