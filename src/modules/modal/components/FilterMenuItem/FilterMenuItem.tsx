import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './FilterMenuItem.scss';
import { FilterMenuItemPropsType } from './FilterMenuItemType';

export const FilterMenuItem: React.FC<FilterMenuItemPropsType> = ({
   itemText,
   isSelect,
   placeholderText,
   clearInputFunction,
   fieldsValueFunction,
}) => {
   const [value, setValue] = useState<string>('');

   const changeText = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   useEffect(() => {
      if (clearInputFunction) {
         clearInputFunction(setValue);
      }
   }, []);

   useEffect(() => {
      if (fieldsValueFunction) {
         fieldsValueFunction(value);
      }
   }, [value]);

   return (
      <label
         className='filter__label label'
         data-qa-label='true'
         data-qa-label-type='block'
      >
         <span className='label__text' data-qa-label-text='true'>
            {itemText}
         </span>
         <span className='label__children' data-qa-label-children='true'>
            {isSelect ? (
               <button className='popup-button--outline popup-button label__button'>
                  <span>Anytime</span>
                  <i className='label__icon'>
                     <svg
                        data-0v2='true'
                        aria-hidden='true'
                        viewBox='0 0 24 24'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeLinejoin='round'
                           strokeWidth='1.5'
                           d='M13.75 8 10 11.75 6.25 8'
                        ></path>
                     </svg>
                  </i>
               </button>
            ) : (
               <div data-qa-formtext='true'>
                  <input
                     type='text'
                     className='label__input'
                     placeholder={placeholderText}
                     onChange={(e) => changeText(e)}
                     value={value}
                  />
               </div>
            )}
         </span>
      </label>
   );
};
