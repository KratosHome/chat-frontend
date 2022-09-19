import React from 'react';
import {PreferencesSidebarItemType } from './PreferencesSidebarItemType';
import './PreferencesSidebarItem.scss';


export const PreferencesSidebarItem: React.FC<PreferencesSidebarItemType> = ({ data, active, setActivePreferenceId}) => {
   return (
      <div 
         className={active? "preferences-sidebar__item__active":"preferences-sidebar__item"}
         onClick={()=>setActivePreferenceId(data.id)}
      >
         {data.icon}
        <p>{data.text}</p>
      </div>
   );
};
