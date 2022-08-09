import React, { useState } from 'react';
import { ReactModal, AvatarMenu } from '../../../modal';
import './Header.scss';

export const Header: React.FC = () => {
   const avatarMenuPosition = 'avatar-menu-position';

   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const handleClick = () => {
      setIsModalOpen(true);
   };

   const handleClose = () => {
      setIsModalOpen(false);
   };

   return (
      <header className='header'>
         <div className='header__container'>
            <div className='header__item'>
               <a className='header__button'>
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none' stroke='currentColor' stroke-width='1.5'>
                        <circle cx='10' cy='10' r='8.25'></circle>
                        <path
                           stroke-linecap='round'
                           d='M 10 5.75 v 4.75 h 3.75'
                        ></path>
                     </g>
                  </svg>
               </a>
            </div>

            <div className='header__search'>
               <span className='header__search-field'>Search Company Name</span>
               <div className='header__box-filter'>
                  <a className='header__button-filter'>
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
               <div className='header__magnifier'>
                  <i>
                     <svg
                        data-som='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='currentColor'
                           d='M 17.22 18.28 a 0.75 0.75 0 1 0 1.06 -1.06 l -1.06 1.06 Z M 15 9 a 6 6 0 0 1 -6 6 v 1.5 A 7.5 7.5 0 0 0 16.5 9 H 15 Z m -6 6 a 6 6 0 0 1 -6 -6 H 1.5 A 7.5 7.5 0 0 0 9 16.5 V 15 Z M 3 9 a 6 6 0 0 1 6 -6 V 1.5 A 7.5 7.5 0 0 0 1.5 9 H 3 Z m 6 -6 a 6 6 0 0 1 6 6 h 1.5 A 7.5 7.5 0 0 0 9 1.5 V 3 Z m 4.47 11.53 l 3.75 3.75 l 1.06 -1.06 l -3.75 -3.75 l -1.06 1.06 Z'
                        ></path>
                     </svg>
                  </i>
               </div>
            </div>

            <div className='header__item header__item-right'>
               <a className='header__button header__button-right'>
                  <svg data-0v2='true' arial-hidden='true' viewBox='0 0 20 20'>
                     <g fill='none'>
                        <circle
                           cx='10'
                           cy='10'
                           r='8.25'
                           stroke='currentColor'
                           stroke-width='1.5'
                        ></circle>
                        <path
                           fill='currentColor'
                           d='m 10.5 10.478 l 0.07 0.747 l -0.07 -0.747 Z M 7 8.25 a 0.75 0.75 0 0 0 1.5 0 H 7 Z M 10 7 c 0.502 0 0.95 0.148 1.258 0.396 c 0.29 0.233 0.492 0.58 0.492 1.104 h 1.5 c 0 -0.977 -0.408 -1.754 -1.05 -2.271 c -0.623 -0.502 -1.424 -0.729 -2.2 -0.729 V 7 Z m -0.75 4 v 1 h 1.5 v -1 h -1.5 Z m 2.5 -2.5 c 0 0.494 -0.146 0.739 -0.307 0.884 c -0.186 0.166 -0.506 0.3 -1.014 0.347 l 0.14 1.494 c 0.675 -0.064 1.355 -0.26 1.874 -0.724 c 0.543 -0.486 0.807 -1.174 0.807 -2.001 h -1.5 Z M 8.5 8.25 c 0 -0.414 0.154 -0.703 0.383 -0.898 C 9.124 7.146 9.503 7 10 7 V 5.5 c -0.78 0 -1.527 0.23 -2.09 0.71 C 7.332 6.704 7 7.415 7 8.25 h 1.5 Z M 10.75 11 a 0.244 0.244 0 0 1 -0.066 0.169 a 0.182 0.182 0 0 1 -0.114 0.056 l -0.14 -1.494 c -0.614 0.058 -1.18 0.56 -1.18 1.269 h 1.5 Z'
                        ></path>
                        <circle
                           cx='10'
                           cy='14'
                           r='1'
                           fill='currentColor'
                        ></circle>
                     </g>
                  </svg>
               </a>
               <div className='header__avatar' onClick={handleClick}>
                  <a className='header__avatar-button'>
                     <img
                        src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-32'
                        alt='user'
                        className='header__avatar-image'
                     />
                     <div className='header__presence-sign'></div>
                  </a>
               </div>
               <ReactModal
                  isModalOpen={isModalOpen}
                  onClose={handleClose}
                  modalPosition={avatarMenuPosition}
               >
                  <AvatarMenu />
               </ReactModal>
            </div>
         </div>
      </header>
   );
};
