import React from 'react';
import './PopupButton.scss';
import { PopupButtonPropsType } from './PopupButtonType';

export const PopupButton: React.FC<PopupButtonPropsType> = ({
   buttonClass,
   isButtonBlocked,
   buttonText,
   buttonClick,
}) => {
   return (
      <button
         className={`popup-button popup-button--${buttonClass} popup-button--medium ${
            isButtonBlocked ? 'popup-button--disabled' : ''
         }`}
         onClick={buttonClick}
         disabled={isButtonBlocked ? true : false}
      >
         {buttonText}
      </button>
   );
};
