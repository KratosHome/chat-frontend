import React, { useState } from 'react';
import { MessageActionsButton } from '../MessageActionsButton';
import './MessageActions.scss';
import { MessageActionsPropsType } from './MessageActionsType';

export const MessageActions: React.FC<MessageActionsPropsType> = ({
   isMyMessage,
}) => {
   const [focusMessageActionsButton, setFocusMessageActionsButton] =
      useState<boolean>(false);

   return (
      <div
         className={`message-actions ${
            isMyMessage ? 'message-actions__own-message' : ''
         }`}
         role='group'
      >
         <div
            className='message-actions__group'
            role='group'
            aria-label='Message shortcuts'
            dta-qa='message-actions'
         >
            <MessageActionsButton
               buttonClass={'emoji'}
               ariaLabel={'React with white_check_mark'}
               data={'white_check_mark'}
               src={
                  'https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-small%2F2705%402x.png'
               }
               ariaLabelImg={'white check mark emoji'}
               alt={'white_check_mark'}
               dataImg={'white_check_mark'}
               tooltip={'Completed'}
               marginTop={'-67px'}
               marginLeft={'-35px'}
               marginArrow={'21px'}
            />
            <MessageActionsButton
               buttonClass={'emoji'}
               ariaLabel={'React with eyes'}
               data={'eyes'}
               src={
                  'https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-small%2F1f440%402x.png'
               }
               ariaLabelImg={'eyes emoji'}
               alt={'eyes'}
               dataImg={'eyes'}
               tooltip={'Taking a look...'}
               marginTop={'-67px'}
               marginLeft={'-45px'}
               marginArrow={'30px'}
            />
            <MessageActionsButton
               buttonClass={'emoji'}
               ariaLabel={'React with raised_hands'}
               data={'raised_hands'}
               src={
                  'https://slack-imgs.com/?c=1&o1=gu&url=https%3A%2F%2Fa.slack-edge.com%2Fproduction-standard-emoji-assets%2F13.0%2Fgoogle-small%2F1f64c%402x.png'
               }
               ariaLabelImg={'raised hands emoji'}
               alt={'raised_hands'}
               dataImg={'raised_hands'}
               tooltip={'Nicely done'}
               marginTop={'-67px'}
               marginLeft={'-37px'}
               marginArrow={'22px'}
            />
            <MessageActionsButton
               buttonClass={'label'}
               ariaLabel={'See more emoji'}
               data={'add_reaction_action'}
               setFocus={setFocusMessageActionsButton}
               tooltip={'See more emoji'}
               marginTop={'-67px'}
               marginLeft={'-20px'}
               marginArrow={'32px'}
            >
               <span className='message-actions__icon'>
                  <i className='message-actions__icon-smile'>
                     <svg viewBox='0 0 20 20'>
                        <g fill='none'>
                           <circle
                              cx='10'
                              cy='10'
                              r='8.25'
                              stroke='currentColor'
                              strokeWidth='1.5'
                           ></circle>
                           <circle
                              cx='7.5'
                              cy='8'
                              r='1.5'
                              fill='currentColor'
                           ></circle>
                           <circle
                              cx='12.5'
                              cy='8'
                              r='1.5'
                              fill='currentColor'
                           ></circle>
                           <path
                              fill='currentColor'
                              d='M10 14.961c1.43 0 2.86-.788 3.477-2.364.22-.56-.258-1.097-.86-1.097H7.383c-.602 0-1.08.537-.86 1.097.616 1.576 2.047 2.364 3.477 2.364Z'
                           ></path>
                        </g>
                     </svg>
                  </i>
                  <i
                     className={`message-actions__icon-smile ${
                        focusMessageActionsButton
                           ? ''
                           : 'message-actions__icon-smile--back'
                     }`}
                  >
                     <svg viewBox='0 0 20 20'>
                        <g fill='#f2c744'>
                           <circle
                              cx='10'
                              cy='10'
                              r='8.25'
                              stroke='black'
                              strokeWidth='1.5'
                           ></circle>
                           <circle
                              cx='7.5'
                              cy='8'
                              r='1.5'
                              fill='black'
                           ></circle>
                           <circle
                              cx='12.5'
                              cy='8'
                              r='1.5'
                              fill='black'
                           ></circle>
                           <path
                              fill='black'
                              d='M10 14.961c1.43 0 2.86-.788 3.477-2.364.22-.56-.258-1.097-.86-1.097H7.383c-.602 0-1.08.537-.86 1.097.616 1.576 2.047 2.364 3.477 2.364Z'
                           ></path>
                        </g>
                     </svg>
                  </i>
               </span>
               <span
                  className='message-actions__text'
                  data-qa='add-reaction_inline_label'
               >
                  React
               </span>
            </MessageActionsButton>
            <MessageActionsButton
               buttonClass={'label'}
               ariaLabel={'Reply in thread'}
               data={'start_thread'}
               tooltip={'Reply in thread'}
               marginTop={'-67px'}
               marginLeft={'-20px'}
               marginArrow={'33px'}
            >
               <span className='message-actions__icon'>
                  <i className='message-actions__icon-comment'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                     >
                        <path
                           fill='currentColor'
                           d='M144 208C126.3 208 112 222.2 112 239.1C112 257.7 126.3 272 144 272s31.1-14.25 31.1-32S161.8 208 144 208zM256 207.1c-17.75 0-31.1 14.25-31.1 32s14.25 31.1 31.1 31.1s31.1-14.25 31.1-31.1S273.8 207.1 256 207.1zM368 208c-17.75 0-31.1 14.25-31.1 32s14.25 32 31.1 32c17.75 0 31.99-14.25 31.99-32C400 222.2 385.8 208 368 208zM256 31.1c-141.4 0-255.1 93.12-255.1 208c0 47.62 19.91 91.25 52.91 126.3c-14.87 39.5-45.87 72.88-46.37 73.25c-6.624 7-8.373 17.25-4.624 26C5.818 474.2 14.38 480 24 480c61.49 0 109.1-25.75 139.1-46.25c28.87 9 60.16 14.25 92.9 14.25c141.4 0 255.1-93.13 255.1-207.1S397.4 31.1 256 31.1zM256 400c-26.75 0-53.12-4.125-78.36-12.12l-22.75-7.125L135.4 394.5c-14.25 10.12-33.87 21.38-57.49 29c7.374-12.12 14.37-25.75 19.87-40.25l10.62-28l-20.62-21.87C69.81 314.1 48.06 282.2 48.06 240c0-88.25 93.24-160 207.1-160s207.1 71.75 207.1 160S370.8 400 256 400z'
                        />
                     </svg>
                  </i>
               </span>
               <span
                  className='message-actions__text'
                  data-qa='comment-alt_inline_label'
               >
                  Reply
               </span>
            </MessageActionsButton>
            <MessageActionsButton
               buttonClass={'label'}
               ariaLabel={'More actions'}
               data={'more_message_actions'}
               tooltip={'More actions'}
               marginTop={'-52px'}
               marginLeft={'-68px'}
               marginArrow={'58px'}
            >
               <span className='message-actions__icon'>
                  <i className='message-actions__icon-dots'>
                     <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 500 500'
                        fill='currentColor'
                     >
                        <path d='M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z' />
                     </svg>
                  </i>
               </span>
            </MessageActionsButton>
         </div>
      </div>
   );
};
