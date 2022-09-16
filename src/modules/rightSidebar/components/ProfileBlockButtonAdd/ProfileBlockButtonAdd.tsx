import React from 'react';
import './ProfileBlockButtonAdd.scss';
import { ProfileBlockButtonAddPropsType } from './ProfileBlockButtonAddType';

export const ProfileBlockButtonAdd: React.FC<
   ProfileBlockButtonAddPropsType
> = ({ buttonText }) => {
   return (
      <button className='button-unstyled profile__button-add' type='button'>
         <i className='profile__icon' aria-hidden='true'>
            <svg data-ufvi='true' viewBox='0 0 20 20'>
               <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='M10 3.25v13.5M16.75 10H3.25'
               ></path>
            </svg>
         </i>
         <span className='profile__button-add-text'>&nbsp;{buttonText}</span>
      </button>
   );
};
