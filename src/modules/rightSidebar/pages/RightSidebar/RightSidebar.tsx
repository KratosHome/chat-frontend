import React, { memo } from 'react';
import { HelpBlock } from '../HelpBlock';
import { ProfileBlock } from '../ProfileBlock';

import './RightSidebar.scss';
import { RightSidebarType } from './RightSidebarType';

export const RightSidebar: React.FC<RightSidebarType> = memo(
   ({ onClose, isHelpBlock, isProfileBlock, currentUserName }) => {
      return (
         <div className='right-sidebar'>
            {isHelpBlock && <HelpBlock onClose={onClose} />}
            {isProfileBlock && (
               <ProfileBlock
                  currentUserName={currentUserName}
                  onClose={onClose}
               />
            )}
         </div>
      );
   },
);
