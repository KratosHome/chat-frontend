import React, { FC, memo, useState } from 'react';
import { HoverButton } from '../HoverButton';
import { InputButtonType } from './InputButtonType';

export const InputButton: FC<InputButtonType> = memo(
   ({ children, focusInput, buttonText }) => {
      const [isHover, setIsHover] = useState(false);

      return (
         <button
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}
         >
            <HoverButton isHover={isHover} focusInput={focusInput}>
               <div>{buttonText}</div>
            </HoverButton>
            {children}
         </button>
      );
   },
);
