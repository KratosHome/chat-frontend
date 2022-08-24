import React, { FC, memo, useState } from 'react';
import './SideBar.scss';
import { ChatList } from '../../components/ChatList';
import { Logo } from '../../components/Logo';
import { SideBarType } from './SideBarType';
import { ReactModal, RoomMenu, SidebarMoreMenu } from '../../../modal';

export const SideBar: FC<SideBarType> = memo(({ setCurrentChannel }) => {
   const roomMenuPosition = 'room-menu-position';
   const sidebarMoreMenuPosition = 'sidebar-more-menu-position';

   const [isModalRoomOpen, setIsModalRoomOpen] = useState<boolean>(false);
   const [isModalSidebarMoreOpen, setIsModalSidebarMoreOpen] =
      useState<boolean>(false);

   const handleRoomClick = () => {
      setIsModalRoomOpen(true);
   };

   const handleRoomClose = () => {
      setIsModalRoomOpen(false);
   };

   const handleSidebarMoreClick = () => {
      setIsModalSidebarMoreOpen(true);
   };

   const handleSidebarMoreClose = () => {
      setIsModalSidebarMoreOpen(false);
   };

   return (
      <div className='containerSideBar'>
         <div className='upAndDownSideBar'>
            <div className='headSideBar' onClick={handleRoomClick}>
               <Logo />
               <div className='brandSideBar'>
                  <span>Company Name</span>
                  <svg
                     data-0v2='true'
                     aria-hidden='true'
                     viewBox='0 0 20 20'
                     className=''
                  >
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M13.75 8 10 11.75 6.25 8'
                     ></path>
                  </svg>
               </div>
               <div onClick={(e) => e.stopPropagation()}>
                  <svg
                     data-0v2='true'
                     aria-hidden='true'
                     viewBox='0 0 20 20'
                     className=''
                  >
                     <g fill='none'>
                        <path
                           fill='currentColor'
                           d='M9.75 4a.75.75 0 0 0 0-1.5V4Zm7.75 6.25a.75.75 0 0 0-1.5 0h1.5ZM13.75 17h-8.5v1.5h8.5V17ZM3 14.75v-8.5H1.5v8.5H3ZM5.25 4h4.5V2.5h-4.5V4ZM16 10.25v4.5h1.5v-4.5H16ZM5.25 17A2.25 2.25 0 0 1 3 14.75H1.5a3.75 3.75 0 0 0 3.75 3.75V17Zm8.5 1.5a3.75 3.75 0 0 0 3.75-3.75H16A2.25 2.25 0 0 1 13.75 17v1.5ZM3 6.25A2.25 2.25 0 0 1 5.25 4V2.5A3.75 3.75 0 0 0 1.5 6.25H3Z'
                        ></path>
                        <path
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='1.5'
                           d='m8 9.5-.75 3.25L10.5 12l6.763-6.763a1.75 1.75 0 0 0 0-2.474l-.026-.026a1.75 1.75 0 0 0-2.474 0L8 9.5ZM14 4l2 2'
                        ></path>
                     </g>
                  </svg>
               </div>
            </div>
            <div className='pagesSideBar'>
               <div>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                        <path
                           strokeLinejoin='round'
                           d='M16.78 13.759a7.75 7.75 0 1 0-3.02 3.02l3.99.971-.97-3.991Z'
                        ></path>
                        <path
                           strokeLinecap='round'
                           d='M6.75 8.25h6.5m-6.5 3.5h4.5'
                        ></path>
                     </g>
                  </svg>
                  <div>Threads</div>
               </div>
               <div>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                        <circle cx='10' cy='10' r='3.75'></circle>
                        <path
                           strokeLinecap='round'
                           d='M13.75 6.75v4.605c0 1.047.848 1.895 1.895 1.895v0a2.605 2.605 0 0 0 2.605-2.605V10'
                        ></path>
                        <path
                           strokeLinecap='round'
                           d='M18.25 10a8.25 8.25 0 1 0-3.497 6.744'
                        ></path>
                     </g>
                  </svg>
                  <div>Mentions & reactions</div>
               </div>
               <div>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        d='M3.25 5.25a3 3 0 0 1 3-3h7.5a3 3 0 0 1 3 3v11.642c0 .766-.927 1.15-1.469.607l-5.21-5.218a.1.1 0 0 0-.142 0l-5.21 5.218c-.542.543-1.469.16-1.469-.607V5.25Z'
                     ></path>
                  </svg>
                  <div>Saved items</div>
               </div>
               <div>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none'>
                        <path
                           stroke='currentColor'
                           strokeWidth='1.5'
                           d='M1.75 4.75a3 3 0 0 1 3-3h5.5a3 3 0 0 1 3 3v13.5H2.75a1 1 0 0 1-1-1V4.75Z'
                        ></path>
                        <path
                           stroke='currentColor'
                           strokeWidth='1.5'
                           d='M13.5 8h1.75a3 3 0 0 1 3 3v6.25a1 1 0 0 1-1 1H13M9.75 18v-2.25a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1V18'
                        ></path>
                        <circle
                           cx='6'
                           cy='8.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                        <circle
                           cx='6'
                           cy='5.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                        <circle
                           cx='9'
                           cy='5.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                        <circle
                           cx='9'
                           cy='8.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                        <circle
                           cx='9'
                           cy='11.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                        <circle
                           cx='6'
                           cy='11.5'
                           r='1'
                           fill='currentColor'
                        ></circle>
                     </g>
                  </svg>
                  <div>Slack Connect</div>
               </div>
               <div onClick={handleSidebarMoreClick}>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='currentColor'>
                        <circle
                           cx='10'
                           cy='3.75'
                           r='1.75'
                           transform='rotate(90 10 3.75)'
                        ></circle>
                        <circle
                           cx='10'
                           cy='10'
                           r='1.75'
                           transform='rotate(90 10 10)'
                        ></circle>
                        <circle
                           cx='10'
                           cy='16.25'
                           r='1.75'
                           transform='rotate(90 10 16.25)'
                        ></circle>
                     </g>
                  </svg>
                  <div>More</div>
               </div>
            </div>
            <div className='containerChatList'>
               <ChatList setCurrentChannel={setCurrentChannel} />
            </div>
         </div>
         <div className='footerSideBar'>
            <div className='infoFooterSideBar'>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  data-qa='huddle_antenna_icon'
               >
                  <path
                     className='p-huddle_antenna_icon__outer_wave p-huddle_antenna_icon__outer_wave--text_color_opacity_50'
                     d='M16.19,3.57A8.75,8.75,0,0,0,3.81,16a.75.75,0,0,0,1.06,0,.74.74,0,0,0,0-1.06,7.25,7.25,0,1,1,10.26,0,.74.74,0,0,0,0,1.06.77.77,0,0,0,.53.22.79.79,0,0,0,.53-.22A8.77,8.77,0,0,0,16.19,3.57Z'
                  ></path>
                  <path d='M14.07,5.7a5.75,5.75,0,0,0-8.14,8.13.75.75,0,0,0,1.06,0,.74.74,0,0,0,0-1.06,4.25,4.25,0,1,1,6,0,.74.74,0,0,0,0,1.06.75.75,0,0,0,.53.22.79.79,0,0,0,.53-.22,5.76,5.76,0,0,0,0-8.13Z'></path>
                  <path d='M12.94,17.48H10.75V12.39a2.75,2.75,0,1,0-1.5,0v5.09H7.06a.75.75,0,1,0,0,1.5h5.88a.75.75,0,1,0,0-1.5ZM8.75,9.76A1.25,1.25,0,1,1,10,11,1.25,1.25,0,0,1,8.75,9.76Z'></path>
               </svg>
               <span>oll</span>
            </div>
            <button className='buttonMicrophoneFooterSideBar'>
               <div className='circleMicrophoneFooterSideBar'></div>
               <div className='iconMicrophoneFooterSideBar'></div>
            </button>
         </div>
         <ReactModal
            isModalOpen={isModalRoomOpen}
            onClose={handleRoomClose}
            modalPosition={roomMenuPosition}
         >
            <RoomMenu />
         </ReactModal>
         <ReactModal
            isModalOpen={isModalSidebarMoreOpen}
            onClose={handleSidebarMoreClose}
            modalPosition={sidebarMoreMenuPosition}
         >
            <SidebarMoreMenu />
         </ReactModal>
      </div>
   );
});
