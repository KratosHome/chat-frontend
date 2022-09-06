import React, { memo } from 'react';
import { HelpBlock } from '../HelpBlock';



import './RightSidebar.scss';
import { RightSidebarType } from './RightSidebarType';



export const RightSidebar: React.FC<RightSidebarType> = memo(
   ({onClose}) => {
      return (
         <div  className='right-sidebar'>
            <HelpBlock onClose={onClose}/>
         </div>
      );
   },
);
