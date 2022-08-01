import React, { useState } from 'react';
import { BsClock } from 'react-icons/bs';
import { BsQuestionCircle } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';

export const Header: React.FC = () => {
   return (
      <header className='header_page'>
         <div className='head_block'>
            <div className='header_button'>
               <a>
                  <BsClock />
               </a>
            </div>

            <div className='search_wrapper'>
               <input
                  type='search'
                  className='header-search-field'
                  placeholder='Search...'
               />
               <div className='header__box-filter'>
                  <a href='#' className='header__button-filter'>
                     <svg
                        data-0v2='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           stroke-linecap='round'
                           stroke-width='1.5'
                           d='M 15.25 4.25 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 2.5 m -15.5 0 h 9 m 3 11.5 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 3.5 m -15.5 0 h 8 m -2 -5.75 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 9.5 M 4.5 10 H 2.25'
                        ></path>
                     </svg>
                  </a>
               </div>
               <div className='magnifier'>
                  <i>
                     <BsSearch />
                  </i>
               </div>
            </div>

            <div className='header_button'>
               <a>
                  <BsQuestionCircle />
               </a>
            </div>

            <div className='header_avatar'>
               <a className='avatar_button'>
                  <img
                     src='https://ca.slack-edge.com/T02BQPYG0ES-U030NCARJ2K-g32b9a6cf239-32'
                     alt='user'
                     className='avatar_image'
                  />
                  <div className='presence_sign'></div>
               </a>
            </div>
         </div>
      </header>
   );
};

export default Header;
