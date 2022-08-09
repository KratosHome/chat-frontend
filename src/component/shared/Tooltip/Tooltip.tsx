import React from 'react';
import './Tooltip.scss';
import { iTooltipProps } from './TooltipType';

export const Tooltip: React.FC<iTooltipProps> = ({
   users,
   show,
   currentChannelId,
}) => {
   let showTooltip = show ? 'visible' : 'unVisible';
   if (currentChannelId === 1) {
      users = [];
      showTooltip = 'unVisible';
   }

   const usersList = users.map((el, index) => {
      return <li key={index}>{el}</li>;
   });

   return (
      <>
         <div className={`tooltip-list ${showTooltip}`}>
            <ul>{usersList}</ul>
         </div>
      </>
   );
};
