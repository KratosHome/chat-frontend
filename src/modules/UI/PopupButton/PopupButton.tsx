import React from 'react';
import './PopupButton.scss';
import { PopupButtonPropsType } from './PopupButtonType';

export const PopupButton: React.FC<PopupButtonPropsType> = ({
   buttonClass,
   isButtonBlocked,
   buttonText,
   buttonClick,
   additionalClass,
   children,
}) => {
   return (
      <button
         className={`popup-button popup-button--${buttonClass} popup-button--medium ${
            isButtonBlocked ? 'popup-button--disabled' : ''
         } ${additionalClass}`}
         onClick={buttonClick}
         disabled={isButtonBlocked ? true : false}
      >
         {buttonText}
         {children}
      </button>
   );
};
