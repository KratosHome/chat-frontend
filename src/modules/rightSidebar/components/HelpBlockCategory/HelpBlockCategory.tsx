
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo } from 'react';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './HelpBlockCategory.scss';
import { HelpBlockCategoryType } from './HelpBlockCategoryType';



export const HelpBlockCategory: React.FC<HelpBlockCategoryType> = memo(
   ({text}) => {
      return (
         <div className='help-block-category'>
            <p>{text}</p>
            <FontAwesomeIcon className='fa-sm' icon={faArrowRight}/>
         </div>
      );
   },
);
