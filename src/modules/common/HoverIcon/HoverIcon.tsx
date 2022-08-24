import React, { FC } from 'react';
import './HoverIcon.scss';
import { HoverIconType } from './HoverIconType';

export const HoverIcon: FC<HoverIconType> = ({
   children,
   isHover,
   marginArrowLeft,
   marginBlockTop,
   marginBlockRight,
   marginBlockLeft,
   marginBlockBottom,
   marginButtonArrowLeft,
}) => {
   return (
      <div
         className={`containerHoverIcon ${isHover ? 'visibleHoverIcon' : ''}`}
         style={{
            marginTop: `${marginBlockTop}`,
            marginRight: `${marginBlockRight}`,
            marginLeft: `${marginBlockLeft}`,
            marginBottom: `${marginBlockBottom}`,
         }}
      >
         {marginArrowLeft?.length >= 0 && (
            <div
               className='TopArrowHoverIcon'
               style={{ marginLeft: `${marginArrowLeft}` }}
            />
         )}
         <>{children}</>
         {marginButtonArrowLeft?.length >= 0 && (
            <div
               className='buttonArrowHoverIcon'
               style={{ marginLeft: `${marginButtonArrowLeft}` }}
            />
         )}
      </div>
   );
};
