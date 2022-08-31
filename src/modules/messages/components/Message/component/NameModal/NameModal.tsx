import React, { FC } from 'react';
import './NameModal.scss';
import { format } from 'date-fns';
import { NameModalType } from './NameModalType';

export const NameModal: FC<NameModalType> = ({ participant, time }) => {
   return (
      <div className='containerNameModal'>
         <div>Workspace Owner</div>
         <div>
            <img
               src='https://ca.slack-edge.com/TL7BX11D5-UKZ6123ED-ge711963dfb8-72'
               alt='user'
               className='avatar-message'
            />
            <span>{participant}</span>
            <span />
         </div>
         <div>
            <div>
               <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                  <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                     <circle cx='10' cy='10' r='8.25'></circle>
                     <path
                        strokeLinecap='round'
                        d='M 10 5.75 v 4.75 h 3.75'
                     ></path>
                  </g>
               </svg>
               <span>{format(new Date(time), 'HH:mm a')}</span>
               <span>local time</span>
            </div>
            <button>Set a status</button>
         </div>
      </div>
   );
};
