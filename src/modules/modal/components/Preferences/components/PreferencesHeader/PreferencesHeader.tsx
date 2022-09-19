import React from 'react';
import { PreferencesHeaderType } from './PreferencesHeaderType';
import './PreferencesHeader.scss';

export const PreferencesHeader: React.FC<PreferencesHeaderType> = ({ onClose }) => {
   return (
      <div className='preferences-header__container'>
        <p>Preferences</p>
        <div 
            className='preferences-header__icon-close'
            onClick={onClose}>
            <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                <path 
                        fill="#1d1c1d" 
                        stroke="currentColor"
                        strokeLinecap="round" 
                        strokeWidth="1.5" 
                        d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546">
                </path>
            </svg>
        </div>
      </div>
   );
};
