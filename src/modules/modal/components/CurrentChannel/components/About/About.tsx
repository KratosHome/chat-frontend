import React, { FC } from 'react';
import './About.scss';
import { AboutType } from './AboutType';
import ChannelState from '../../../../../../store/channel';

export const About: FC<AboutType> = ({ tab, setTab }) => {
   return (
      <>
         <div
            className={tab === 1 ? 'visibleTabs' : 'nowVisible'}
            onClick={() => setTab(1)}
         >
            <div className='containerAbout'>
               <div className='chanelNameAbout'>
                  <div>
                     <h3>Chanel name</h3>
                     <div>Edit</div>
                  </div>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-width='2'
                        d='M9 4 6.5 18m7.25-14-2.5 14M4 8h13M3 14.5h13'
                     ></path>
                  </svg>
                  <span>{ChannelState.initialState.name}</span>
               </div>

               <div className='chanelNameAbout borderButtonAbout'>
                  <div>
                     <h3>Topic</h3>
                     <div>Edit</div>
                  </div>
                  <span>Company-wide announcements and work-based matters</span>
               </div>

               <div className='chanelNameAbout borderButtonAbout borderTopAbout'>
                  <div>
                     <h3>Description</h3>
                     <div>Edit</div>
                  </div>
                  <span>
                     This channel is for workspace-wide communication and
                     announcements. All members are in this channel.1
                  </span>
               </div>

               <div className='chanelNameAbout borderTopAbout'>
                  <div>
                     <h3>Created by</h3>
                     <div>Edit</div>
                  </div>
                  <span>Oleg on July 5, 2019</span>
               </div>
               <div className='chanelNameAbout'>
                  <div>
                     <h3>Files</h3>
                  </div>
                  <span>
                     There aren’t any files to see here right now. But there
                     could be — drag and drop any file into the message pane to
                     add it to this conversation.
                  </span>
               </div>
               <div className='channelIDAbout'>
                  Channel ID: {ChannelState.initialState.id}
               </div>
            </div>
         </div>
      </>
   );
};
