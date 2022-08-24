import React from 'react';
import './AddPeopleMessage.scss';
import { AddPeopleMessageType } from './AddPeopleMessageType';

export const AddPeopleMessage: React.FC<AddPeopleMessageType> = ({
   placeholderName,
   closeModal,
}) => {
   return (
      <div className='container-menu widthAddPeopleMessage'>
         <div className='container-menu__items'>
            <div className='containerAddPeopleMessage'>
               <h1>Add people</h1>
               <h3># {placeholderName}</h3>
               <button
                  className='closeAddPeopleMessage'
                  onClick={() => closeModal(false)}
               >
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546'
                     ></path>
                  </svg>
               </button>
               <input type='text' placeholder={'Enter a name or email'} />
               <button>Add</button>
            </div>
         </div>
      </div>
   );
};
