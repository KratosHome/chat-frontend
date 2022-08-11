import React from 'react';
import './MenuPlansItem.scss';

export const MenuPlansItem: React.FC = () => {
   return (
      <div className='container-menu__item item'>
         <button className='item__button'>
            <div className='item__label'>
               <div className='plans'>
                  <div className='plans__container'>
                     Your workspace is currently on the free version of
                     Chat-service.
                     <span className='plans__link'>See plans</span>
                  </div>
               </div>
            </div>
         </button>
      </div>
   );
};
