import React, { FC, ReactNode } from 'react';
import './HoverModal.scss';
import { HoverModalType } from './HoverModalType';

export const HoverModal: FC<HoverModalType> = ({
   children,
   isModalOpen,
   topCoords,
   leftCoords,
   timerOut,
   timerOver,
}) => {
   return (
      <div onMouseOut={timerOut} onMouseOver={timerOver}>
         <div
            className={isModalOpen ? 'openHoverModal' : 'closeHoverModal'}
            style={{
               position: 'absolute',
               top: `${topCoords}px`,
               left: `${leftCoords}px`,
            }}
         >
            {children}
         </div>
      </div>
   );
};
