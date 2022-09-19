import React, { useState } from 'react';
import { PreferencesSidebarType } from './PreferencesSidebarType';
import './PreferencesSidebar.scss';
import { PreferencesSidebarItem } from '../PreferencesSidebarItem';
import { preferencesData } from '../../../../../../services/preferences.service';


export const PreferencesSidebar: React.FC<PreferencesSidebarType> = ({id,setId}) => {
   return (
   <div className='preferences-sidebar'>
         {preferencesData.map(preference=>(<PreferencesSidebarItem 
            key={preference.id} 
            data={preference}
            active={preference.id === id} 
            setActivePreferenceId={setId} />))}
   </div>
   )}