
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';


import './HelpTitle.scss';
import { HelpTitleType } from './HelpTitleType';


export const HelpTitle: React.FC<HelpTitleType> = memo(
   ({text, icon, margin}) => {
      return (
        <div className='help-title' style={{margin}}>
            <FontAwesomeIcon className='fa-sm' icon={icon} />
            <p>{text}</p>
        </div>
      );
   },
);
