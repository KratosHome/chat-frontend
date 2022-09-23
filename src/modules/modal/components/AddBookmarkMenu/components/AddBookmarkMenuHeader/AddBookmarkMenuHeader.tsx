
import React from 'react';
import './AddBookmarkMenuHeader.scss';
import { AddBookmarkMenuHeaderType } from './AddBookmarkMenuHeaderType';

export const AddBookmarkMenuHeader: React.FC<AddBookmarkMenuHeaderType> = ({ onClose }) => {
   return (
       <div className='add-bookmark-menu__header'>
        <p>Add a bookmark to this channel</p>
         <div 
            className='add-bookmark-menu__icon-close'
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
