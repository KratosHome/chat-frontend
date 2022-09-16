import React from 'react';
import './ProfileBlockActive.scss';
import { format } from 'date-fns';

export const ProfileBlockActive: React.FC = () => {
   return (
      <div className='profile__active'>
         <div className='profile__active-container'>
            <i
               className='profile__icon-active'
               title='Active'
               aria-label='Active'
               aria-hidden='false'
               data-qa='presence_indicator'
               data-qa-type='presence-online'
               data-qa-presence-self='true'
               data-qa-presence-active='true'
               data-qa-presence-dnd='false'
            >
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1000 1000'
                  fill='currentColor'
               >
                  <path d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z' />
               </svg>
            </i>
            <span className='profile__active-text'>Active</span>
         </div>
         <div className='profile__time'>
            <div className='profile__time-container'>
               <i className='profile__icon-time' aria-hidden='true'>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                        <circle cx='10' cy='10' r='8.25'></circle>
                        <path
                           strokeLinecap='round'
                           d='M 10 5.75 v 4.75 h 3.75'
                        ></path>
                     </g>
                  </svg>
               </i>
               <span className='profile__time-text'>{`${format(
                  new Date(),
                  'H:mm a',
               )} local time`}</span>
            </div>
         </div>
      </div>
   );
};
