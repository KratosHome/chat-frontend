import React, { FC, useState } from 'react';
import './SearchModal.scss';
import { SearchModalType } from './SearchModalType';

export const SearchModal: FC<SearchModalType> = ({
   chanelName,
   onClose,
   modalFilterOpen,
}) => {
   const [inputValue, setInputValue] = useState('');

   const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
   };

   const clearInputButton = () => {
      setInputValue('');
   };

   return (
      <div className='container-menu widthSearchModal'>
         <div className='container-menu__items'>
            <div className='containerSearchModal'>
               <div className='inputSearchModal'>
                  <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='currentColor'
                        d='M17.22 18.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15 9a6 6 0 0 1-6 6v1.5A7.5 7.5 0 0 0 16.5 9H15Zm-6 6a6 6 0 0 1-6-6H1.5A7.5 7.5 0 0 0 9 16.5V15ZM3 9a6 6 0 0 1 6-6V1.5A7.5 7.5 0 0 0 1.5 9H3Zm6-6a6 6 0 0 1 6 6h1.5A7.5 7.5 0 0 0 9 1.5V3Zm4.47 11.53 3.75 3.75 1.06-1.06-3.75-3.75-1.06 1.06Z'
                     ></path>
                  </svg>
                  <input
                     onChange={(e) => changeValue(e)}
                     value={inputValue}
                     placeholder='Search messages, files, around corners, under rugs, etc.'
                     type='text'
                  />
                  {inputValue.length >= 1 && (
                     <button
                        className='clearInputSearchModal'
                        onClick={clearInputButton}
                     >
                        Clear
                     </button>
                  )}
                  <button
                     onClick={() => {
                        modalFilterOpen(true);
                        onClose(false);
                     }}
                  >
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeWidth='1.5'
                           d='M15.25 4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h2.5m-15.5 0h9m3 11.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h3.5m-15.5 0h8m-2-5.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h9.5M4.5 10H2.25'
                        ></path>
                     </svg>
                  </button>
                  <button
                     className='onCloseSearchModal'
                     onClick={() => onClose(false)}
                  >
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeWidth='1.5'
                           d='m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546'
                        ></path>
                     </svg>
                  </button>
               </div>
               <div className='chatSearchModal'>
                  <div>
                     Find in{' '}
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                        className='is-inline'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeWidth='1.5'
                           d='m9 3.75-2.5 14.5m7.25-14.5-2.5 14.5m-7.5-10.5h13.5m-14.5 7h13.5'
                        ></path>
                     </svg>
                     {chanelName}
                  </div>
               </div>
               <p className='lookForSearchModal'>I'm looking for…</p>
               <div className='categorySearchModal'>
                  <button>
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <g
                           fill='none'
                           stroke='currentColor'
                           strokeLinejoin='round'
                           strokeWidth='1.5'
                        >
                           <path d='M2.714 15.432a4.25 4.25 0 1 1 1.854 1.854l-2.318.464.464-2.318Z'></path>
                           <path
                              strokeLinecap='round'
                              d='M14 12.966a5.4 5.4 0 0 0 .75-.316l3 .6-.6-3A5.5 5.5 0 1 0 6.952 6.265'
                           ></path>
                        </g>
                     </svg>
                     <span>Messages</span>
                  </button>
                  <button>
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <g
                           fill='none'
                           stroke='currentColor'
                           strokeLinejoin='round'
                           strokeWidth='1.5'
                        >
                           <path d='M9.258 1.964a1.4 1.4 0 0 1 1.484 0l6.118 3.824a.84.84 0 0 1 0 1.424l-6.118 3.824a1.4 1.4 0 0 1-1.484 0L3.14 7.212a.84.84 0 0 1 0-1.424l6.118-3.824Z'></path>
                           <path
                              strokeLinecap='round'
                              d='m17.26 10.463-6.52 4.074a1.397 1.397 0 0 1-1.482 0l-6.523-4.078'
                           ></path>
                           <path
                              strokeLinecap='round'
                              d='m17.26 13.963-6.52 4.074a1.397 1.397 0 0 1-1.482 0l-6.523-4.078'
                           ></path>
                        </g>
                     </svg>
                     <span>Files</span>
                  </button>
                  <button>
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <path
                           fill='none'
                           stroke='currentColor'
                           strokeLinecap='round'
                           strokeWidth='1.5'
                           d='m9 3.75-2.5 14.5m7.25-14.5-2.5 14.5m-7.5-10.5h13.5m-14.5 7h13.5'
                        ></path>
                     </svg>
                     <span>Channels</span>
                  </button>
                  <button>
                     <svg
                        data-aqc='true'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                     >
                        <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                           <path
                              strokeLinecap='round'
                              d='M6.23 9.25s-3.524.568-4.437 3.52c-.244.791.459 1.48 1.287 1.48h.221m2.929-5c-1.094-1.423-1.5-2.576-1.5-3.75 0-1.693 1.23-3.25 3.384-3.25.215 0 .42.014.616.04'
                           ></path>
                           <path d='M18.137 15.803c.454 1.008-.502 1.947-1.607 1.947H7.47c-1.105 0-2.06-.94-1.607-1.947 1.013-2.25 3.8-3.053 6.137-3.053 2.338 0 5.124.803 6.137 3.053ZM15.25 8.438c0 2.795-1.771 4.312-3.25 4.312s-3.25-1.517-3.25-4.313c0-1.824 1.367-3.187 3.25-3.187s3.25 1.363 3.25 3.188Z'></path>
                        </g>
                     </svg>
                     <span>People</span>
                  </button>
               </div>
               <div className='footerSearchModal'>
                  <span>Not the results you expected?</span>
                  <a>Give feedback</a>
                  <span>or</span>
                  <a>learn more</a>
               </div>
            </div>
         </div>
      </div>
   );
};
