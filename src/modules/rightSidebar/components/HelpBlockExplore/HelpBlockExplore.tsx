
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';
import React, { memo } from 'react';


import './HelpBlockExplore.scss';
import { ExploreButton } from '../ExploreButton';
import { HelpTitle } from '../HelpTitle';


export const HelpBlockExplore: React.FC = memo(
   () => {
      return (
        <div className='help-block-explore__container'>
            <HelpTitle text='Explore help topics' icon={faLifeRing} margin='0 0 14px'/>
            <div className='help-block-explore__buttons'>
                <ExploreButton title='Use mentions in Slack' src='https://a.slack-edge.com/bv1-9/mentioned-user-4acb349.svg'/>
                <ExploreButton title='Use huddles in Slack' src='https://a.slack-edge.com/bv1-9/huddles-019db75.svg'/>
                <ExploreButton title='Slack Connect guide: work with external partners' src='https://a.slack-edge.com/bv1-9/slack-connect-1375e73.svg'/>
                <ExploreButton title='Configure your Slack notifications' src='https://a.slack-edge.com/bv1-9/bell-fdb211a.svg'/>
                <ExploreButton title='Set your Slack status and availability' src='https://a.slack-edge.com/bv1-9/profile-84c9d96.svg'/>
            </div>
        </div>
      );
   },
);