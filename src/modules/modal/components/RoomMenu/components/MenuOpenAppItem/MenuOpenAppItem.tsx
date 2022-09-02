import React from 'react';
import { Logo } from '../../../../../sidebar';
import './MenuOpenAppItem.scss';

export const MenuOpenAppItem: React.FC = () => {
   return (
      <div className='container-menu__item item'>
         <button className='item__button'>
            <div className='item__label'>
               <div className='app'>
                  <span className='app-text'>Open the Chat-service App</span>
                  <span className='app-icon'>
                     <Logo />
                  </span>
               </div>
            </div>
         </button>
      </div>
   );
};
