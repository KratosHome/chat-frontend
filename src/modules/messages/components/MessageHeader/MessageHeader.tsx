import React, { useState } from 'react';
import { channelParticipants } from '../../../../services/channelParticipants.service';
import { participants } from '../../../../services/participant.service';
import { Tooltip } from '../../../common/Tooltip';
import './MessageHeader.scss';
import { iMessageHeaderProps } from './MessageHeaderType';

export const MessageHeader: React.FC<iMessageHeaderProps> = ({
   currentChannel,
   currentChannelId,
}) => {
   const [showHint, setShowHint] = useState<boolean>(false);

   const participantsArray: any = [];
   const channelParticipantsId = channelParticipants.find(
      (el) => el.channelId === currentChannelId
   );
   const participantsId = channelParticipantsId?.participantsId;
   participantsId?.map((el) => {
      participantsArray?.push(participants?.find((e) => e.id === el)?.name);
   });
   const participantsCount = participantsId ? participantsId.length : 0;

   const handleMouseOver = () => {
      setShowHint(true);
   };

   const handleMouseOut = () => {
      setShowHint(false);
   };

   return (
      <div className='message-header'>
         <div className='message-header__wrapper'>
            <div className='current-channel'>
               <div className='current-channel__wrapper'>
                  <span className='current-channel__grid'>
                     <svg
                        data-0v2='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           stroke-linecap='round'
                           stroke-width='2'
                           d='M 9 4 L 6.5 18 m 7.25 -14 l -2.5 14 M 4 8 h 13 M 3 14.5 h 13'
                        ></path>
                     </svg>
                  </span>
                  <span className='current-channel__name'>
                     {currentChannel}
                  </span>
                  <span className='current-channel__arrow'>
                     <svg
                        data-0v2='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           stroke-linecap='round'
                           stroke-linejoin='round'
                           stroke-width='1.5'
                           d='M 13.75 8 L 10 11.75 L 6.25 8'
                        ></path>
                     </svg>
                  </span>
               </div>
            </div>

            <div
               className='people'
               onMouseOver={handleMouseOver}
               onMouseOut={handleMouseOut}
            >
               <button className='people__wrapper'>
                  <div className='people__round'>
                     <span className='people__round-container'>
                        <img
                           src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-24'
                           srcSet='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-48 2x'
                           alt='icon'
                           className='people__round-icon'
                           aria-hidden='true'
                           role='img'
                        />
                     </span>
                     <div className='people__participants-count'>
                        {participantsCount}
                     </div>
                  </div>
               </button>
            </div>
         </div>
         <div className='bookmark'>
            <div className='bookmark__container'>
               <button className='bookmark__button'>
                  <i />
                  Add a bookmark
               </button>
            </div>
         </div>
         <Tooltip
            users={participantsArray}
            show={showHint}
            currentChannelId={currentChannelId}
         />
      </div>
   );
};