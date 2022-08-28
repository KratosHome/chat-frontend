import React, { useState } from 'react';
import { HoverIcon } from '../../../../common/HoverIcon';
import { MenuItem } from '../../MenuItem';
import { PauseNotificationsPropsType } from './PauseNotificationsType';
import "./PauseNotifications.scss"
import { MenuSeparatorItem } from '../../MenuSeparatorItem';

export const PauseNotifications: React.FC<PauseNotificationsPropsType> = ({onMouseOut,onMouseOver}) => {
   const [isHoverHelp, setIsHoverHelp] = useState<boolean>(false);
   return(
   <div className='pause-notifications container-menu' onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div className='container-menu__items'>
         <div className='pause-notifications__header-container'>
            <div className='pause-notifications__header'>Pause notifications...</div> 
            <div>
               <a
                  className='pause-notifications__help-button'
                  onMouseOver={() => setIsHoverHelp(true)}
                  onMouseOut={() => setIsHoverHelp(false)}
               >
                  <svg data-0v2='true' arial-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none'>
                        <circle
                           cx='10'
                           cy='10'
                           r='8.25'
                           stroke='currentColor'
                           strokeWidth='1.5'
                        ></circle>
                        <path
                           fill='currentColor'
                           d='m 10.5 10.478 l 0.07 0.747 l -0.07 -0.747 Z M 7 8.25 a 0.75 0.75 0 0 0 1.5 0 H 7 Z M 10 7 c 0.502 0 0.95 0.148 1.258 0.396 c 0.29 0.233 0.492 0.58 0.492 1.104 h 1.5 c 0 -0.977 -0.408 -1.754 -1.05 -2.271 c -0.623 -0.502 -1.424 -0.729 -2.2 -0.729 V 7 Z m -0.75 4 v 1 h 1.5 v -1 h -1.5 Z m 2.5 -2.5 c 0 0.494 -0.146 0.739 -0.307 0.884 c -0.186 0.166 -0.506 0.3 -1.014 0.347 l 0.14 1.494 c 0.675 -0.064 1.355 -0.26 1.874 -0.724 c 0.543 -0.486 0.807 -1.174 0.807 -2.001 h -1.5 Z M 8.5 8.25 c 0 -0.414 0.154 -0.703 0.383 -0.898 C 9.124 7.146 9.503 7 10 7 V 5.5 c -0.78 0 -1.527 0.23 -2.09 0.71 C 7.332 6.704 7 7.415 7 8.25 h 1.5 Z M 10.75 11 a 0.244 0.244 0 0 1 -0.066 0.169 a 0.182 0.182 0 0 1 -0.114 0.056 l -0.14 -1.494 c -0.614 0.058 -1.18 0.56 -1.18 1.269 h 1.5 Z'
                        ></path>
                        <circle cx='10' cy='14' r='1' fill='currentColor'></circle>
                     </g>
                   </svg>
               </a>
               <HoverIcon
                  isHover={isHoverHelp}
                  marginArrowLeft={'20px'}
                  marginBlockTop={'10px'}
                  marginBlockLeft={'-30px'}
               >
                  <div>Do Not Disturb</div>
               </HoverIcon>
            </div>
        </div>
        <div className='pause-notifications__menu'>
            <MenuItem itemText='For 30 minutes'/>
            <MenuItem itemText='For 1 hour'/>
            <MenuItem itemText='For 2 hours'/>
            <MenuItem itemText='Until tomorrow'/>
            <MenuItem itemText='Custom...'/>
        </div>
        <MenuSeparatorItem/>
        <div className='pause-notifications__new-menu'>
            <MenuItem itemText='Set a notification schedule'/>
            <div className='pause-notifications__label-icon'>NEW</div>
        </div>
      </div>
   </div>)
 };
 