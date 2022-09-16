import React, { useState } from 'react';
import { HoverIcon } from '../../../UI/HoverIcon';
import { PopupIconButton } from '../../../UI/PopupIconButton';
import './ProfileBlockHeader.scss';
import { ProfileBlockHeaderPropsType } from './ProfileBlockHeaderType';

export const ProfileBlockHeader: React.FC<ProfileBlockHeaderPropsType> = ({
   onClose,
}) => {
   const [isHoverClose, setIsHoverClose] = useState<boolean>(false);

   return (
      <div
         role='toolbar'
         aria-orientation='horizontal'
         aria-label='Secondary view actions'
         className='profile__header'
      >
         <div className='profile__header-container'>
            <div className='profile__header-content'>
               <div
                  className='profile__header-title'
                  data-qa='flexpane-title-container'
               >
                  Profile
               </div>
            </div>
            <PopupIconButton
               buttonAriaLabel={'Close'}
               buttonClass={'profile__header-button-close'}
               buttonData={'close_modal_button'}
               buttonClick={onClose}
               buttonMouseOver={() => setIsHoverClose(true)}
               buttonMouseOut={() => setIsHoverClose(false)}
            >
               <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                  <path
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeWidth='1.5'
                     d='m 5.227 5.227 l 9.546 9.546 m 0 -9.546 l -9.546 9.546'
                  ></path>
               </svg>
               <HoverIcon
                  isHover={isHoverClose}
                  marginArrowLeft={'15px'}
                  marginBlockBottom={'-88px'}
                  marginBlockLeft={'-18px'}
               >
                  Close
               </HoverIcon>
            </PopupIconButton>
         </div>
      </div>
   );
};
