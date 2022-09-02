import React, { useState } from 'react';
import { PopupButton } from '../../../../UI/PopupButton';
import { PopupIconButton } from '../../../../UI/PopupIconButton';
import { SetStatusInput } from '../components/SetStatusInput';
import { SetStatusItem } from '../components/SetStatusItem';
import './SetStatus.scss';
import { SetStatusPropsType } from './SetStatusType';

export const SetStatus: React.FC<SetStatusPropsType> = ({ onClose }) => {
   const [inputValue, setInputValue] = useState<string>('');

   const inputValueFunction = (callback: string) => {
      setInputValue(callback);
   };

   return (
      <div className='dark-modal-container' style={{ maxHeight: '476px' }}>
         <div className='dark-modal-container__header'>
            <div className='dark-modal-container__title'>
               <div className='dark-modal-container__title-text'>
                  <h1>Set a status</h1>
               </div>
            </div>
         </div>
         <div className='dark-modal-container__content'>
            <div
               className='dark-modal-container__content-container'
               style={{ padding: '5px 0px' }}
            >
               <SetStatusInput inputValueFunction={inputValueFunction} />
               <fieldset className='status-modal__presets'>
                  <legend className='status-modal__preset-title'>
                     For my company
                  </legend>
                  <div className='status-modal__presets'>
                     <SetStatusItem
                        ariaLabel={
                           'Status 1 of 5, set status to In a meeting :spiral_calendar_pad: emoji, clear after 1 hour'
                        }
                        src={
                           'https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f5d3-fe0f@2x.png'
                        }
                        imgAriaLabel={'spiral calendar pad emoji'}
                        alt={':spiral_calendar_pad:'}
                        itemText={'In a meeting'}
                        itemDuration={'1 hour'}
                     />
                     <SetStatusItem
                        ariaLabel={
                           'Status 2 of 5, set status to Commuting :bus: emoji, clear after 30 minutes'
                        }
                        src={
                           'https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f68c@2x.png'
                        }
                        imgAriaLabel={'bus emoji'}
                        alt={':bus:'}
                        itemText={'Commuting'}
                        itemDuration={'30 minutes'}
                     />
                     <SetStatusItem
                        ariaLabel={
                           'Status 3 of 5, set status to Out sick :face_with_thermometer: emoji, clear after today'
                        }
                        src={
                           'https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f912@2x.png'
                        }
                        imgAriaLabel={'face with thermometer emoji'}
                        alt={':face_with_thermometer:'}
                        itemText={'Out sick'}
                        itemDuration={'Today'}
                     />
                     <SetStatusItem
                        ariaLabel={
                           'Status 4 of 5, set status to Vacationing :palm_tree: emoji, don’t clear'
                        }
                        src={
                           'https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f334@2x.png'
                        }
                        imgAriaLabel={'palm tree emoji'}
                        alt={':palm_tree:'}
                        itemText={'Vacationing'}
                        itemDuration={'Don’t clear'}
                     />
                     <SetStatusItem
                        ariaLabel={
                           'Status 5 of 5, set status to Working remotely :house_with_garden: emoji, clear after today'
                        }
                        src={
                           'https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/1f3e1@2x.png'
                        }
                        imgAriaLabel={'house with garden emoji'}
                        alt={':house_with_garden:'}
                        itemText={'Working remotely'}
                        itemDuration={'Today'}
                     />
                  </div>
               </fieldset>
               <fieldset className='status-modal__presets'>
                  <legend className='status-modal__preset-title'>
                     Automatically updates
                  </legend>
                  <div className='status-modal__presets'>
                     <SetStatusItem
                        ariaLabel={
                           'Status 1 of 1, set status to In a meeting undefined emoji, undefined'
                        }
                        src={
                           'https://app.slack.com/img/calendar/google-calendar/gCal-logo.png'
                        }
                        imgAriaLabel={'spiral calendar pad emoji'}
                        alt={':spiral_calendar_pad:'}
                        itemText={'In a meeting'}
                        itemDuration={'Based on your Google Calendar'}
                     />
                  </div>
               </fieldset>
            </div>
         </div>
         <div className='dark-modal-container__footer'>
            <a
               target='_blank'
               className='status-modal__link'
               href='https://companyname-69k7264.chatservice.com/customize/statuses'
               rel='noopener noreferrer'
            >
               Edit suggestions for Company Name
               <span aria-label='(opens in new tab)'></span>
            </a>
            <div className='dark-modal-container__footer-actions'>
               <PopupButton
                  buttonClass={'outline'}
                  buttonClick={onClose}
                  buttonText={'Cancel'}
               />
               <PopupButton
                  buttonClass={'primary'}
                  buttonText={'Save'}
                  isButtonBlocked={inputValue ? false : true}
               />
            </div>
         </div>
         <div className='status-modal__keyboard-hint'>
            <div className='status-modal__keyboard-hint-container'>
               <strong>Tip:</strong> Open this faster with{' '}
               <strong>Ctrl + Shift + Y</strong>
            </div>
         </div>
         <PopupIconButton
            buttonAriaLabel={'Close'}
            buttonClass={'dark-modal-container__close-button'}
            buttonData={'close_modal_button'}
            buttonClick={onClose}
         >
            <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
               <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='m 5.227 5.227 l 9.546 9.546 m 0 -9.546 l -9.546 9.546'
               ></path>
            </svg>
         </PopupIconButton>
      </div>
   );
};
