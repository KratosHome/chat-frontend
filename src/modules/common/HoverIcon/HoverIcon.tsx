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
}) => {
   return (
      <div
         className={`containerHoverIcon ${isHover ? 'visibleHoverIcon' : ''}`}
         style={{
            marginTop: `${marginBlockTop}`,
            marginRight: `${marginBlockRight}`,
            marginLeft: `${marginBlockLeft}`,
         }}
      >
         <div
            className='TopArrowHoverIcon'
            style={{ marginLeft: `${marginArrowLeft}` }}
         />
         <>{children}</>
      </div>
   );
};
