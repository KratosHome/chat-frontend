import React from 'react';
import { DropdownInputType } from './DropdownInputType';
import './DropdownInput.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const DropdownInput: React.FC<DropdownInputType> = ({ active, width, margin, icon }) => {
   return (
    <div className='dropdown-input' style={{width, margin}}>
        <p className='dropdown-input__active'>
            {icon && <FontAwesomeIcon icon={icon}/>}
            {active}
        </p>
        <svg data-us8="true" viewBox="0 0 20 20" >
            <path 
                fill="none"
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M17.75 6.25 10 14 2.25 6.25"
            />
        </svg>
    </div>
   );
};
