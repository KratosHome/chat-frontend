
import React, { memo } from 'react';
import { HelpBlockCarousel } from '../../components/HelpBlockCarousel';
import { HelpBlockCategories } from '../../components/HelpBlockCategories';
import { HelpBlockExplore } from '../../components/HelpBlockExplore';
import { HelpBlockFooter } from '../../components/HelpBlockFooter';
import { HelpBlockHeader } from '../../components/HelpBlockHeader';
import { HelpBlockInput } from '../../components/HelpBlockInput';

import './HelpBlock.scss';
import { HelpBlockType } from './HelpBlockType';


export const HelpBlock: React.FC<HelpBlockType> = memo(
   ({onClose}) => {
      return (
         <div  className='help-block__container'>
          <div>
            <HelpBlockHeader onClose={onClose}/>
            <HelpBlockInput/>
          </div>
           <div className='help-block__main'>
              <HelpBlockCarousel/>
              <HelpBlockExplore/>
              <HelpBlockCategories/>
           </div>
           <HelpBlockFooter />
         </div>
      );
   },
);
