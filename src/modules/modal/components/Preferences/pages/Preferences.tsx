import React, { useState } from 'react';
import { PreferencesType } from './PreferencesType';
import './Preferences.scss';
import { PreferencesHeader } from '../components/PreferencesHeader';
import { PreferencesSidebar } from '../components/PreferencesSidebar';
import { PreferencesNotifications } from './Notifications';
import { preferencesData } from '../../../../../services/preferences.service';

export const Preferences: React.FC<PreferencesType> = ({ onClose }) => {
   const [activePreferenceId, setActivePreferenceId ] = useState(1);
   
   return (
      <div className='preferences__container'>
         <PreferencesHeader onClose={onClose}/>
         <div className='preferences__main'>
            <PreferencesSidebar id={activePreferenceId} setId={setActivePreferenceId} />
            <div className='preferences__section'>
               {preferencesData.find(item=>item.id === activePreferenceId)?.component}
            </div>
         </div>
      </div>
   );
};
