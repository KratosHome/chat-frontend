
import React, { memo } from 'react';
import {  faCircleQuestion } from '@fortawesome/free-solid-svg-icons';


import './HelpBlockCategories.scss';
import { HelpBlockCategory } from '../HelpBlockCategory';
import { HelpTitle } from '../HelpTitle';



export const HelpBlockCategories: React.FC = memo(
   () => {
      return (
         <div className='help-block-categories__container'>
            <HelpTitle text='Help categories' icon={faCircleQuestion} margin="0 0 10px"/>
            <div className='help-block-categories__items'>
                <HelpBlockCategory text='Getting started'/>
                <HelpBlockCategory text='Using Slack'/>
                <HelpBlockCategory text='Your profile & preferences'/>
                <HelpBlockCategory text='Workspace administration'/>
                <HelpBlockCategory text='Slack tutorials'/>
            </div>
         </div>
      );
   },
);
