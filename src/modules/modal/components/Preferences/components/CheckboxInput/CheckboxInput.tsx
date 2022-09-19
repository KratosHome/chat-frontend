import React from 'react';
import { CheckboxInputType } from './CheckboxInputType';
import './CheckboxInput.scss';


export const CheckboxInput: React.FC<CheckboxInputType> = ({ isChecked, text, setChecked  }) => {
   return (
    <label className='checkbox-input'>
        <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={()=>setChecked(!isChecked)} /> 
            {text}
    </label>
   );
};
