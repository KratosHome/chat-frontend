import React, { FC } from 'react';
import './Settings.scss';
import { SettingsType } from './SettingsType';

export const Settings: FC<SettingsType> = ({ tab, setTab }) => {
   return (
      <div
         className={tab === 4 ? 'visibleTabs' : 'nowVisible'}
         onClick={() => setTab(4)}
      >
         <div className='containerSettingsType'>
            <div className='blockSettings'>
               <div>
                  <h3>Chanel name</h3>
                  <div>Edit</div>
               </div>
               <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                  <path
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeWidth='1.5'
                     d='m9 3.75-2.5 14.5m7.25-14.5-2.5 14.5m-7.5-10.5h13.5m-14.5 7h13.5'
                  ></path>
               </svg>
               <span>general</span>
            </div>

            <div className='blockSettings borderButtonAbout '>
               <div>
                  <h3>Posting permissions</h3>
                  <div>Edit</div>
               </div>
               <ul>
                  <li>Everyone can post</li>
                  <li>Everyone can reply to messages</li>
                  <li>Everyone except guests can use @everyone mentions</li>
               </ul>
               <a>Learn more</a>
            </div>

            <div className='blockSettings borderTopAbout'>
               <div>
                  <h3>Huddles</h3>
                  <div>Edit</div>
               </div>
               <span>Members can start and join huddles in this channel.</span>
               <a>Learn more</a>
            </div>
         </div>
      </div>
   );
};
