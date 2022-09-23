import React, { memo, useEffect, useRef, useState } from 'react';
import { channelParticipants } from '../../../../services/channelParticipants.service';
import { participants } from '../../../../services/participant.service';
import { HoverIcon } from '../../../UI/HoverIcon';
import { ReactModal } from '../../../modal';
import { BookmarkMenu } from '../../../modal/components/BookmarkMenu/pages';
import { CurrentChannel } from '../../../modal/components/CurrentChannel/pages';
import './MessageHeader.scss';
import { iMessageHeaderProps } from './MessageHeaderType';
import { AddBookmarkMenu } from '../../../modal/components/AddBookmarkMenu';

export const MessageHeader: React.FC<iMessageHeaderProps> = memo(
   ({ currentChannel, currentChannelId }) => {
      const currentChannelButtonRef = useRef<HTMLDivElement>(null);

      const [coords, setCoords] = useState<number>(0);
      const [channelHintCoords, setChannelHintCoords] = useState<number>(0);

      const [isModalBookmarkOpen, setIsModalBookmarkOpen] =
         useState<boolean>(false);
      const [isModalAddBookmarkOpen, setIsModalAddBookmarkOpen] =
         useState<boolean>(false);
      const [isModalChanelNameOpen, setIsModalChanelNameOpen] =
         useState<boolean>(false);

      const [isHoverPeople, setIsHoverPeople] = useState<boolean>(false);
      const [isHoverChannel, setIsHoverChannel] = useState<boolean>(false);
      const [isHoverBookmark, setIsHoverBookmark] = useState<boolean>(false);

      const participantsArray: any = [];
      const channelParticipantsId = channelParticipants.find(
         (el) => el.channelId === currentChannelId,
      );
      const participantsId = channelParticipantsId?.participantsId;
      participantsId?.map((el) => {
         participantsArray?.push(participants?.find((e) => e.id === el)?.name);
      });
      const participantsCount = participantsId ? participantsId.length : 0;

      const handleBookmarkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
         setIsModalBookmarkOpen(true);
         let rect = (e.target as Element).getBoundingClientRect();
         let x = e.clientX - rect.left;

         setCoords(e.clientX - x);
      };

      const currentChannelButtonSize = () => {
         let rect = (
            currentChannelButtonRef.current as Element
         ).getBoundingClientRect();
         let width = rect.width;
         let channelHintPosition = 0;

         if (width > 129) {
            channelHintPosition = (width - 129) / 2;
         }

         if (width < 129) {
            channelHintPosition = -(129 - width) / 2;
         }

         setChannelHintCoords(channelHintPosition);
      };

      useEffect(() => {
         currentChannelButtonSize();
      }, [currentChannel]);

      return (
         <>
            <div className='message-header'>
               <div className='message-header__wrapper'>
                  <div
                     className='current-channel'
                     onMouseEnter={() => setIsHoverChannel(true)}
                     onMouseLeave={() => setIsHoverChannel(false)}
                     ref={currentChannelButtonRef}
                  >
                     <div
                        className='current-channel__wrapper'
                        onClick={() =>
                           setIsModalChanelNameOpen(!isModalChanelNameOpen)
                        }
                     >
                        <span className='current-channel__grid'>
                           <svg
                              data-0v2='true'
                              aria-hidden='true'
                              viewBox='0 0 20 20'
                           >
                              <path
                                 fill='none'
                                 stroke='currentColor'
                                 strokeLinecap='round'
                                 strokeWidth='2'
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
                                 strokeLinecap='round'
                                 strokeLinejoin='round'
                                 strokeWidth='1.5'
                                 d='M 13.75 8 L 10 11.75 L 6.25 8'
                              ></path>
                           </svg>
                        </span>
                     </div>
                     <HoverIcon
                        isHover={isHoverChannel}
                        marginArrowLeft={'40px'}
                        marginBlockTop={'38px'}
                        marginBlockLeft={`${channelHintCoords}px`}
                     >
                        <div>Get channel details</div>
                     </HoverIcon>
                  </div>
                  <div className='people'>
                     <button
                        className='people__wrapper'
                        onMouseOver={() => setIsHoverPeople(true)}
                        onMouseOut={() => setIsHoverPeople(false)}
                     >
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
                        <HoverIcon
                           isHover={isHoverPeople}
                           marginArrowLeft={'135px'}
                           marginBlockTop={'12px'}
                           marginBlockLeft={'-135px'}
                        >
                           <div className='people__hint'>
                              <div>
                                 <span>View all members of this</span>
                                 <span>Channel</span>
                              </div>
                              <div>Includes you</div>
                           </div>
                        </HoverIcon>
                     </button>
                  </div>
               </div>
               <div className='bookmark'>
                  <div className='bookmark__container'>
                     <button
                        className='bookmark__button'
                        onClick={handleBookmarkClick}
                        onMouseOver={() => setIsHoverBookmark(true)}
                        onMouseOut={() => setIsHoverBookmark(false)}
                     >
                        <i />
                        Add a bookmark
                     </button>
                     <HoverIcon
                        isHover={isHoverBookmark}
                        marginButtonArrowLeft={'35px'}
                        marginBlockTop={'-37px'}
                        marginBlockLeft={'7px'}
                     >
                        <div>Add a bookmark</div>
                     </HoverIcon>
                  </div>
               </div>
               <ReactModal
                  isModalOpen={isModalBookmarkOpen}
                  onClose={() => setIsModalBookmarkOpen(false)}
                  modalPosition={'bookmark-menu-position'}
               >
                  <div
                     style={{
                        left: `${coords}px`,
                        position: 'absolute',
                     }}
                  >
                     <BookmarkMenu  
                        onClose={() => setIsModalBookmarkOpen(false)} 
                        openAddBookmark={() => setIsModalAddBookmarkOpen(true)}
                     />
                  </div>
               </ReactModal>
            </div>
            <ReactModal
               isModalOpen={isModalChanelNameOpen}
               onClose={() => setIsModalChanelNameOpen(false)}
               modalPosition={'add-chanel-position'}
               onBlur={true}
            >
               <CurrentChannel
                  setIsModalChanelName={setIsModalChanelNameOpen}
               />
            </ReactModal>

            <ReactModal
                  isModalOpen={isModalAddBookmarkOpen}
                  onClose={() => setIsModalAddBookmarkOpen(false)}
                  modalPosition={'add-bookmark-menu-position'}
                  onBlur={true}
               >
                     <AddBookmarkMenu onClose={() => setIsModalAddBookmarkOpen(false)}/>
               </ReactModal>
         </>
      );
   },
);
