import React from 'react';
import './PopupIconButton.scss';
import { PopupIconButtonPropsType } from './PopupIconButtonType';

export const PopupIconButton: React.FC<PopupIconButtonPropsType> = ({
   buttonAriaLabel,
   buttonClass,
   buttonData,
   buttonClick,
   buttonMouseOver,
   buttonMouseOut,
   children,
}) => {
   return (
      <button
         className={`button-unstyled popup-icon-button popup-icon-button--size-medium ${buttonClass} popup-icon-button--default`}
         aria-label={buttonAriaLabel}
         data-qa={buttonData}
         onClick={buttonClick}
         onMouseOver={buttonMouseOver}
         onMouseOut={buttonMouseOut}
      >
         {children}
      </button>
   );
};
