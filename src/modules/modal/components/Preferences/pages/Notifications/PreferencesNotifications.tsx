import React, { useEffect, useState } from 'react';
import { MenuSeparatorItem } from '../../../MenuSeparatorItem';
import { CheckboxInput } from '../../components/CheckboxInput';
import { DropdownInput } from '../../components/DropdownInput';
import {  faClock } from '@fortawesome/free-solid-svg-icons';


import './PreferencesNotifications.scss';
import { RadioButton } from '../../components/RadioButton';

export const enum NotifyMeAbout {
   ALL_NEW_MESSAGES = "All new messages",
   DIRECT_MESSAGES_MENTIONS_KEYBOARDS = "Direct messages, mentions & keywords",
   NOTHING = "Nothing"

}

export const PreferencesNotifications: React.FC = () => {

   const [notifyMeAboutRadio, setNotifyMeAboutRadio] = useState<NotifyMeAbout>(NotifyMeAbout.ALL_NEW_MESSAGES);
   const [isMobileDeviceInputChecked, setIsMobileDeviceInputChecked] = useState<boolean>(false);
   const [isNotifyMeWhenHuddleStarts, setIsNotifyMeWhenHuddleStarts] = useState<boolean>(true);
   const [isNotifyMeRepliesThread, setIsNotifyMeRepliesThread] = useState<boolean>(true);
   const [isShowBadgeInSidebar, setIsShowBadgeInSidebar] = useState<boolean>(true);
   const [isIncludePreviewMessage, setIsIncludePreviewMessage] = useState<boolean>(false);
   const [isMuteAllSounds, setIsMuteAllSounds] = useState<boolean>(false);
   const [isSendMeEmail, setIsSendMeEmail] = useState<boolean>(false);

   const handleChangeNotifyMeAboutRadio = (e:React.ChangeEvent<HTMLInputElement>) =>{
      setNotifyMeAboutRadio(e.target.value as NotifyMeAbout)
   }
   return (
         <div className='preferences-notifications__container'>
            <p className='preferences-notifications__description'>We strongly recommend enabling notifications so that you'll know when important activity happens in your Slack workspace.</p>
            <div style={{display:"flex", justifyContent:"space-between"}}>
               <div className='preferences-notifications__button'>
                  <svg data-4kl="true" viewBox="0 0 20 20" >
                     <path 
                        fill="currentColor" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                        d="M10 2.25c-1 0-1.63.691-1.75 2-2.5.5-3.468 2.616-3.5 7.25l-2.083 2.09c-.929 1.022-.204 2.16 1.176 2.16h3.989c.096.926.764 2 2.182 2 1.398 0 2.06-1.074 2.155-2h3.986c1.38 0 2.105-1.138 1.176-2.16L15.25 11.5c-.03-4.634-1-6.75-3.5-7.25-.12-1.309-.75-2-1.75-2Z">
                     </path>
                  </svg>
                  <p>Enable Desktop Notifications</p>
               </div> 
               <div className='preferences-notifications__link-button'>
                  <p>About notifications</p>
                  <svg data-hni="true" viewBox="0 0 20 20">
                     <g fill="none">
                        <circle 
                           cx="10" 
                           cy="10" 
                           r="8.25" 
                           stroke="currentColor" 
                           strokeWidth="1.5"
                        >
                        </circle>
                        <path 
                           fill="currentColor" 
                           d="m10.5 10.478.07.747-.07-.747ZM7 8.25a.75.75 0 0 0 1.5 0H7ZM10 7c.502 0 .95.148 1.258.396.29.233.492.58.492 1.104h1.5c0-.977-.408-1.754-1.05-2.271-.623-.502-1.424-.729-2.2-.729V7Zm-.75 4v1h1.5v-1h-1.5Zm2.5-2.5c0 .494-.146.739-.307.884-.186.166-.506.3-1.014.347l.14 1.494c.675-.064 1.355-.26 1.874-.724.543-.486.807-1.174.807-2.001h-1.5ZM8.5 8.25c0-.414.154-.703.383-.898C9.124 7.146 9.503 7 10 7V5.5c-.78 0-1.527.23-2.09.71C7.332 6.704 7 7.415 7 8.25h1.5ZM10.75 11a.244.244 0 0 1-.066.169.182.182 0 0 1-.114.056l-.14-1.494c-.614.058-1.18.56-1.18 1.269h1.5Z"
                        >
                        </path>
                        <circle cx="10" cy="14" r="1" fill="currentColor">
                        </circle>
                     </g>
                  </svg>
               </div>
            </div>
            <div className='preferences-notifications__notify-me-about'>
               <p className='preferences-notifications__title'>Notify me about...</p>
               <div className='preferences-notifications__notify-me-about__radio-list'>
                  <RadioButton 
                     value={NotifyMeAbout.ALL_NEW_MESSAGES} 
                     name="notify-me-about" 
                     activeValue={notifyMeAboutRadio} 
                     setActive={handleChangeNotifyMeAboutRadio}
                  />
                  <RadioButton 
                     value={NotifyMeAbout.DIRECT_MESSAGES_MENTIONS_KEYBOARDS} 
                     name="notify-me-about" 
                     activeValue={notifyMeAboutRadio} 
                     setActive={handleChangeNotifyMeAboutRadio}
                  />
                  <RadioButton 
                     value={NotifyMeAbout.NOTHING} 
                     name="notify-me-about" 
                     activeValue={notifyMeAboutRadio} 
                     setActive={handleChangeNotifyMeAboutRadio}
                  />
               </div>
            </div>
            <CheckboxInput 
               isChecked={isMobileDeviceInputChecked}
               text="Use different settings for my mobile devices"
               setChecked={setIsMobileDeviceInputChecked}
            />
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
            <CheckboxInput 
               isChecked={isNotifyMeWhenHuddleStarts}
               text="Notify me when a huddle starts in one of my channels"
               setChecked={setIsNotifyMeWhenHuddleStarts}
            />
            <CheckboxInput 
               isChecked={isNotifyMeRepliesThread}
               text="Notify me about replies to threads I'm following"
               setChecked={setIsNotifyMeRepliesThread}
            />
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
            <div style={{marginBottom:"20px"}}>
               <CheckboxInput 
                  isChecked={isShowBadgeInSidebar}
                  text="Show a badge in my sidebar when I have a new Slack Connect invitation"
                  setChecked={setIsShowBadgeInSidebar}
               />
            </div>
            <p className='preferences-notifications__title'>My keywords</p>
            <p className='preferences-notifications__description'>
                Show a badge
               (<span className='preferences-notifications__badge'>1</span>) in my channel list when someone uses one of my keywords:
            </p>
            <textarea className="preferences-notifications__textarea"/>
            <p className='preferences-notifications__under-title'>Use commas to separate each keyword. Keywords are not case sensitive.</p>
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
            <p className='preferences-notifications__title'>Notification schedule</p>
            <p className='preferences-notifications__description'>
               You'll only receive notifications in the hours you choose. Outside of those times, notifications will be paused. 
               <span className='preferences-notifications__link' style={{marginLeft:"5px"}}>Learn more</span>
            </p>
            <p className='preferences-notifications__title'>Allow notifications:</p>
            <div style={{display:"flex", alignItems:"center", marginBottom:"16px"}} >
               <DropdownInput active='Every day' width='160px' margin='0 10px 0 0' />
               <DropdownInput active='8:00 AM' width='120px'/>
               <p className='preferences-notifications__to'>to</p>
               <DropdownInput active='10:00 PM' width='120px'/>
            </div>
            <p className='preferences-notifications__title'>Set a default time for reminder notifications:</p>
            <DropdownInput active='10:00 PM' width='200px' margin='0 0 16px 0' icon={faClock}/>
            <p className='preferences-notifications__under-title'>
               <span className='preferences-notifications__link' style={{marginRight:"5px"}}>Reminders you set</span>
               for a specific day (like “tomorrow”) will be sent at the time you select.
            </p>
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
            <p className='preferences-notifications__title'>Sound & appearance</p>
            <p className='preferences-notifications__description'>
               Choose how notifications look, sound, and behave.
            </p>
            <CheckboxInput 
                  isChecked={isIncludePreviewMessage}
                  text="Include a preview of the message in each notification (disable this for extra privacy)"
                  setChecked={setIsIncludePreviewMessage}
               />
            <CheckboxInput 
               isChecked={isMuteAllSounds}
               text="Mute all sounds from Slack"
               setChecked={setIsMuteAllSounds}
            />
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
            <div style={{marginBottom:"35px"}}>
               <p className='preferences-notifications__title'>When I'm not active on desktop ...</p>
               <p>Send notifications to my mobile devices:</p>
               <DropdownInput active="As soon as I'm inactive" width='300px' margin='0 0 16px 0'/>
            </div>
            <CheckboxInput 
               isChecked={isSendMeEmail}
               text="Send me email notifications for mentions and direct messages"
               setChecked={setIsSendMeEmail}
            />
            <div style={{padding:"12px 0"}}>
               <MenuSeparatorItem/>
            </div>
         </div>
   );
};
