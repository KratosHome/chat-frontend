import React from 'react';
import './ProfileBlock.scss';
import { ProfileBlockPropsType } from './ProfileBlockType';
import { ProfileBlockHeader } from '../../components/ProfileBlockHeader';
import { ProfileBlockAvatar } from '../../components/ProfileBlockAvatar';
import { ProfileBlockActive } from '../../components/ProfileBlockActive';
import { ProfileBlockButtonEdit } from '../../components/ProfileBlockButtonEdit';
import { ProfileBlockStatus } from '../../components/ProfileBlockStatus';
import { ProfileBlockButtonAdd } from '../../components/ProfileBlockButtonAdd';
import { ProfileBlockContactBody } from '../../components/ProfileBlockContactBody';
import { ProfileBlockIcon } from '../../components/ProfileBlockIcon';

export const ProfileBlock: React.FC<ProfileBlockPropsType> = ({
   onClose,
   currentUserName,
}) => {
   return (
      <div
         role='group'
         aria-roledescription='Secondary view'
         aria-label='Profile'
         className='profile'
      >
         <ProfileBlockHeader onClose={onClose} />
         <div className='profile__content'>
            <div className='profile__content-container'>
               <ProfileBlockAvatar />
               <div className='profile__section'>
                  <div className='profile__section-content'>
                     <div className='profile__name'>
                        <span className='profile__name-text'>
                           {currentUserName}
                        </span>
                        <ProfileBlockButtonEdit />
                     </div>
                     <div className='profile__pronunciation'>
                        <ProfileBlockButtonAdd
                           buttonText={'Add name pronunciation'}
                        />
                     </div>
                     <ProfileBlockActive />
                     <ProfileBlockStatus />
                  </div>
               </div>
               <div className='profile__section'>
                  <div className='profile__contact-info'>
                     <div className='profile__contact-info-text'>
                        Contact information
                     </div>
                     <div className='profile__contact-info-button'>
                        <ProfileBlockButtonEdit />
                     </div>
                  </div>
                  <div className='profile__contact-info-content'>
                     <div className='profile__contact-info-item'>
                        <ProfileBlockIcon>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 570 570'
                           >
                              <path d='M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z' />
                           </svg>
                        </ProfileBlockIcon>
                        <ProfileBlockContactBody titleText={'Email Address'}>
                           <a
                              target='_blank'
                              className='profile__contact-info-link'
                              aria-haspopup='menu'
                              aria-expanded='false'
                              href='mailto:emailaddresslink345678@gmail.com'
                              rel='noopener noreferrer'
                           >
                              emailaddresslink345678@gmail.com
                              <span aria-label='(open is new tab)'></span>
                           </a>
                        </ProfileBlockContactBody>
                     </div>
                     <div className='profile__contact-info-item'>
                        <ProfileBlockIcon>
                           <svg
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 570 570'
                           >
                              <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
                           </svg>
                        </ProfileBlockIcon>
                        <ProfileBlockContactBody
                           titleText={'Phone'}
                           additionalClass={'profile__contact-info-last-item'}
                        >
                           <ProfileBlockButtonAdd buttonText={'Add phone'} />
                        </ProfileBlockContactBody>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className='profile__footer'></div>
      </div>
   );
};
