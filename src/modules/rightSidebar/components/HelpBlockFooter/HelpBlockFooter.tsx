
import React, { memo } from 'react';

import './HelpBlockFooter.scss';



export const HelpBlockFooter: React.FC = memo(
   () => {
      return (
         <div className='help-block-footer__container'>
            <div className='help-block-footer__help-request'>
               <p>Help request</p>
               <svg  data-l8x="true" viewBox="0 0 20 20">
                  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                     <path strokeLinejoin="round" d="m8.75 11.25 8-8m0 0h-5m5 0v5"></path>
                     <path d="M8.25 5.25h-2a3 3 0 0 0-3 3v5.5a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3v-2"></path>
                  </g>
               </svg>
            </div>
            <div className='help-block-footer__button'>
                Contact us
            </div>
         </div>
      );
   },
);
