
import React from 'react';
import { RadioButtonType } from './RadioButtonType';
import './RadioButton.scss';


export const RadioButton: React.FC<RadioButtonType> = ({ activeValue,value, setActive, name  }) => {
   return (
    <label className='radio-button'>
        <input 
            type="radio" 
            value={value} 
            checked={value === activeValue} 
            name={name}
            onChange={setActive}
        /> 
        {value}
    </label>
   );
};
