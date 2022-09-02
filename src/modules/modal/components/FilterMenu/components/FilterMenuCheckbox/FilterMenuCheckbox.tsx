import React, { ChangeEvent, useState } from 'react';
import { FilterMenuCheckboxPropsType } from './FilterMenuCheckboxType';

export const FilterMenuCheckbox: React.FC<FilterMenuCheckboxPropsType> = ({
   itemText,
}) => {
   const [isChecked, setIsChecked] = useState<boolean>(false);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked);
   };

   return (
      <label
         className='filter__label label label__checkbox'
         data-qa-label='true'
         data-qa-label-type='block'
      >
         <span
            className='label__text label__text-checkbox'
            data-qa-label-text='true'
            style={{ fontWeight: `${isChecked ? 700 : ''}` }}
         >
            {itemText}
         </span>
         <span className='label__children' data-qa-label-children='true'>
            <input
               type='checkbox'
               className='label__checkbox-input'
               value='exclude-items'
               onChange={handleChange}
            />
         </span>
      </label>
   );
};
