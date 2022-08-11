import React from 'react';
import './MenuRoomNameItem.scss';

export const MenuRoomNameItem: React.FC = () => {
   return (
      <div className='container-menu__item item'>
         <button className='item__button'>
            <div className='item__label'>
               <div className='room-name'>
                  <i className='room-name__icon'>CN</i>
                  <div className='room-name__content'>
                     <div className='room-name__name'>Company Name</div>
                     <div className='room-name__link'>
                        companyname-nsm7389.chat-service.com
                     </div>
                  </div>
               </div>
            </div>
         </button>
      </div>
   );
};
