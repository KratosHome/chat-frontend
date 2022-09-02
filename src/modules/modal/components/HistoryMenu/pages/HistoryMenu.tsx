import React from 'react';
import { MenuHistoryItem } from '../components/MenuHistoryItem';

export const HistoryMenu: React.FC = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <div className='container-menu__header'>Recent</div>
            <MenuHistoryItem visitedChannel={'Internal Chat'} />
            <MenuHistoryItem visitedChannel={'General'} />
            <MenuHistoryItem visitedChannel={'Incidents'} />
            <MenuHistoryItem visitedChannel={'Support'} />
         </div>
      </div>
   );
};
