import React from 'react';
import './SetStatusItem.scss';
import { SetStatusItemPropsType } from './SetStatusItemType';

export const SetStatusItem: React.FC<SetStatusItemPropsType> = ({
   ariaLabel,
   src,
   imgAriaLabel,
   alt,
   itemText,
   itemDuration,
}) => {
   return (
      <div className='status-modal__preset-container'>
         <button
            className='button-unstyled status-modal__preset-button'
            aria-label={ariaLabel}
            type='button'
         >
            <img
               src={src}
               aria-label={imgAriaLabel}
               alt={alt}
               className='status-modal__preset-emoji'
               data-qa='emoji'
               data-stringify-type='emoji'
               data-stringify-emoji={alt}
            />
            <span className='status-modal__preset-text'>
               <span>{itemText}</span>
            </span>
            <span className='status-modal__preset-duration'>
               {itemDuration}
            </span>
         </button>
      </div>
   );
};
