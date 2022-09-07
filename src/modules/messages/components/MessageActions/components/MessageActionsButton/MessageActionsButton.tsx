import React, { memo, useEffect, useRef, useState } from 'react';
import { HoverIcon } from '../../../../../UI/HoverIcon';
import { MessageActionsButtonPropsType } from './MessageActionsButtonType';

export const MessageActionsButton: React.FC<MessageActionsButtonPropsType> =
   memo(
      ({
         ariaLabel,
         ariaLabelImg,
         dataImg,
         data,
         alt,
         children,
         buttonClass,
         src,
         setFocus,
         tooltip,
         marginTop,
         marginArrow,
         marginLeft,
         buttonClick,
         buttonCoordFunction,
      }) => {
         const buttonRef = useRef<HTMLButtonElement>(null);

         const [timerId, setTimerId] = useState<NodeJS.Timeout>();

         const [buttonRect, setButtonRect] = useState<DOMRect | undefined>();

         const [isHoverHint, setIsHoverHint] = useState<boolean>(false);

         const handleMouseOver = () => {
            if (setFocus) {
               setFocus(true);
            }
         };

         const handleMouseOut = () => {
            if (setFocus) {
               setFocus(false);
            }
         };

         const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (buttonClick) {
               let timer = setTimeout(() => {
                  buttonClick(true);
               }, 100);

               setTimerId(timer);

               let rect = (e.target as Element).getBoundingClientRect();
               setButtonRect(rect);
            }
         };

         useEffect(() => {
            if (setFocus) {
               buttonRef.current?.addEventListener(
                  'mouseover',
                  handleMouseOver,
               );
               buttonRef.current?.addEventListener('mouseout', handleMouseOut);

               return () => {
                  buttonRef.current?.removeEventListener(
                     'mouseover',
                     handleMouseOver,
                  );
                  buttonRef.current?.removeEventListener(
                     'mouseout',
                     handleMouseOut,
                  );
               };
            }
         }, []);

         useEffect(() => {
            if (buttonCoordFunction) {
               buttonCoordFunction(buttonRect);
            }

            return () => {
               clearTimeout(timerId);
            };
         }, [buttonRect]);

         return (
            <button
               className={`button-unstyled message-actions__button message-actions__button--${buttonClass}`}
               aria-label={ariaLabel}
               aria-pressed='false'
               data-qa={data}
               data-sk='tooltip_parent'
               type='button'
               ref={buttonRef}
               onMouseOver={() => setIsHoverHint(true)}
               onMouseOut={() => setIsHoverHint(false)}
               onClick={handleClick}
            >
               {children ? (
                  children
               ) : (
                  <img
                     src={src}
                     aria-label={ariaLabelImg}
                     alt={alt}
                     data-qa='emoji'
                     data-stringify-type='emoji'
                     data-stringify-emoji={dataImg}
                  />
               )}
               <HoverIcon
                  isHover={isHoverHint}
                  marginButtonArrowLeft={marginArrow}
                  marginBlockTop={marginTop}
                  marginBlockLeft={marginLeft}
               >
                  {tooltip}
               </HoverIcon>
            </button>
         );
      },
   );
