import React, { memo } from 'react';
import './AddPeopleMessage.scss';
import { AddPeopleMessageType } from './AddPeopleMessageType';

export const AddPeopleMessage: React.FC<AddPeopleMessageType> = memo(
   ({ placeholderName, closeModal }) => {
      return (
         <div className='container-menu widthAddPeopleMessage'>
            <div className='container-menu__items'>
               <div className='containerAddPeopleMessage'>
                  <h1>
                     Add people to # {placeholderName}
                     <button onClick={() => closeModal(false)}>
                        <svg
                           data-aqc='true'
                           aria-hidden='true'
                           viewBox='0 0 20 20'
                        >
                           <path
                              fill='none'
                              stroke='currentColor'
                              stroke-linecap='round'
                              stroke-width='1.5'
                              d='m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546'
                           ></path>
                        </svg>
                     </button>
                  </h1>
                  <input type='text' placeholder={'Enter a name or email'} />
                  <button>Add</button>
                  <div className='proConnectAddPeopleMessage'>
                     <div className='headProConnectAddPeopleMessage'>
                        Try Slack Connect <span>PRO</span>
                     </div>
                     <div>
                        Working with people at other companies? Simply type
                        their email above to get started.
                        <a>Learn more</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   },
);
