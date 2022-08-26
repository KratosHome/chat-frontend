import React, { FC, memo, useState } from 'react';
import './InputUpperBlock.scss';
import { InputUpperBlockType } from './InputUpperBlockType';
import { HoverIcon } from '../../../UI/HoverIcon';

export const InputUpperBlock: FC<InputUpperBlockType> = memo(
   ({ focusInput }) => {
      const [isHoverBold, setIsHoverBold] = useState<boolean>(false);
      const [isHoverItalic, setIsHoverItalic] = useState<boolean>(false);
      const [isHoverStrikethrough, setIsHoverStrikethrough] =
         useState<boolean>(false);
      const [isHoverLink, setIsHoverLink] = useState<boolean>(false);
      const [isHoverOrderedList, setIsHoverOrderedList] =
         useState<boolean>(false);
      const [isHoverBulletedList, setIsHoverBulletedList] =
         useState<boolean>(false);
      const [isHoverBlockquote, setIsHoverBlockquote] =
         useState<boolean>(false);
      const [isHoverCode, setIsHoverCode] = useState<boolean>(false);
      const [isHoverCodeBlock, setIsHoverCodeBlock] = useState<boolean>(false);

      return (
         <div
            className={
               focusInput
                  ? 'activeContainerInputUpperBlock containerInputUpperBlock'
                  : 'containerInputUpperBlock'
            }
         >
            <button
               onMouseOver={() => setIsHoverBold(true)}
               onMouseOut={() => setIsHoverBold(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <path
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth='1.5'
                     d='M5.75 2.75h-1v6.315h1m0-6.315v6.315m0-6.315h3.5m-3.5 6.315h4.343M9.25 2.75h1.843a3.157 3.157 0 1 1 0 6.315h-1M9.25 2.75 6 3.25h4.093a2.907 2.907 0 1 1 0 5.815M5.75 9.5h-1v7.75h1m0-7.75v7.75m0-7.75h5m-5 7.75h3.5m1.5-7.75h1.125a3.875 3.875 0 0 1 0 7.75H9.25m1.5-7.75a3.5 3.5 0 1 1 0 7h-4.5l3 .75m3-13.798c.667.311 2 1.216 2 2.338 0 1.123-1.333 2.183-2 2.807M14 11c.333.417 1 1.5 1 2.5s-.667 2.083-1 2.5'
                  ></path>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverBold}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'-19px'}
                  marginButtonArrowLeft={'14px'}
               >
                  <div className='searchHoverIcon'>
                     Bold
                     <div>
                        <span>Ctrl</span>
                        <span>B</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverItalic(true)}
               onMouseOut={() => setIsHoverItalic(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g fill='none'>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='M7.75 2.75h7.5m-10.5 14.5h7.5'
                     ></path>
                     <path
                        fill='currentColor'
                        d='m7.5 17.5 3-15h2l-3 15h-2Z'
                     ></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverItalic}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'19px'}
                  marginButtonArrowLeft={'14px'}
               >
                  <div className='searchHoverIcon'>
                     Italic
                     <div>
                        <span>Ctrl</span>
                        <span>I</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverStrikethrough(true)}
               onMouseOut={() => setIsHoverStrikethrough(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g fill='none'>
                     <path
                        fill='currentColor'
                        d='m11.54 17.083.179.728-.18-.728Zm-3.41-.13.202-.722-.201.722ZM11.5 11a.75.75 0 0 0 0-1.5V11Zm-3-8-.179-.728-.007.002-.007.002L8.5 3ZM6.474 14.387a.75.75 0 0 0-1.448.39l1.448-.39Zm7.052-8.692a.75.75 0 0 0 1.448-.39l-1.448.39Zm1.163 7.26a.75.75 0 1 0-1.378.591l1.378-.59Zm-3.328 3.4c-.989.244-1.991.166-3.029-.123l-.403 1.445c1.213.338 2.486.456 3.79.135l-.358-1.456ZM11.5 9.5c-3.561 0-4.782-1.449-4.978-2.624-.215-1.29.656-2.747 2.171-3.152l-.386-1.45c-2.232.596-3.612 2.766-3.265 4.85C5.409 9.324 7.562 11 11.5 11V9.5Zm-3.168 6.73c-.93-.259-1.613-.934-1.858-1.844l-1.448.39c.388 1.441 1.483 2.503 2.903 2.9l.403-1.445ZM8.68 3.729c1.008-.248 2.129-.222 3.042.111.896.328 1.556.93 1.805 1.855l1.448-.39c-.401-1.491-1.486-2.416-2.738-2.874-1.234-.45-2.663-.466-3.915-.159l.358 1.457Zm4.632 9.817c.273.639.186 1.204-.13 1.673-.333.492-.958.925-1.82 1.137l.358 1.456c1.14-.28 2.12-.889 2.704-1.753.6-.888.743-1.992.266-3.104l-1.378.591Z'
                     ></path>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='M2.75 10.25h14.5'
                     ></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverStrikethrough}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'40px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Strikethrough
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>X</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverLink(true)}
               onMouseOut={() => setIsHoverLink(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     strokeWidth='1.5'
                  >
                     <path d='m10 5 1.775-1.775a3.5 3.5 0 0 1 4.95 0l.05.05a3.5 3.5 0 0 1 0 4.95l-3.18 3.18a3.5 3.5 0 0 1-5.064-.121L8.5 11.25'></path>
                     <path d='m10 15-1.775 1.775a3.5 3.5 0 0 1-4.95 0l-.05-.05a3.5 3.5 0 0 1 0-4.95l3.18-3.18a3.5 3.5 0 0 1 5.064.121l.031.034'></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverLink}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'80px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Link
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>U</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverOrderedList(true)}
               onMouseOut={() => setIsHoverOrderedList(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeLinejoin='round'
                  >
                     <path
                        strokeWidth='1.5'
                        d='M7.75 10.75h10m-10 6.5h10m-10-13h10'
                     ></path>
                     <path d='m2 3 1.5-.5v4H2h3m-2.857 7.36A1.505 1.505 0 0 1 3.5 13c.828 0 1.25.672 1.25 1.25 0 .828-1.5 2-2.75 3.25h3'></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverOrderedList}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'120px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Ordered List
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>7</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverBulletedList(true)}
               onMouseOut={() => setIsHoverBulletedList(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g fill='none'>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M7.75 10h10m-10 7h10m-10-14h10'
                     ></path>
                     <circle cx='3' cy='10' r='1' fill='currentColor'></circle>
                     <circle cx='3' cy='3' r='1' fill='currentColor'></circle>
                     <circle cx='3' cy='17' r='1' fill='currentColor'></circle>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverBulletedList}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'158px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Bulleted List
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>8</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverBlockquote(true)}
               onMouseOut={() => setIsHoverBlockquote(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <path
                     fill='none'
                     stroke='currentColor'
                     strokeLinecap='round'
                     strokeWidth='1.5'
                     d='M2.75 2.75v14.5m4-13.5h8.5m-8.5 6.5h10.5m-10.5 6h7.5'
                  ></path>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverBlockquote}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'198px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Blockquote
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>9</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverCode(true)}
               onMouseOut={() => setIsHoverCode(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g fill='none'>
                     <path
                        fill='currentColor'
                        d='M15.296 5.236a.75.75 0 1 0-1.092 1.028l1.092-1.028ZM18.75 10l.546.514a.75.75 0 0 0 0-1.028L18.75 10Zm-4.546 3.736a.75.75 0 1 0 1.092 1.028l-1.092-1.028Zm0-7.472 4 4.25 1.092-1.028-4-4.25-1.092 1.028Zm4 3.222-4 4.25 1.092 1.028 4-4.25-1.092-1.028Zm-13.5-4.25a.75.75 0 1 1 1.092 1.028L4.704 5.236ZM1.25 10l-.546.514a.75.75 0 0 1 0-1.028L1.25 10Zm4.546 3.736a.75.75 0 1 1-1.092 1.028l1.092-1.028Zm0-7.472-4 4.25L.704 9.486l4-4.25 1.092 1.028Zm-4 3.222 4 4.25-1.092 1.028-4-4.25 1.092-1.028Z'
                     ></path>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='m8.25 17.25 3.5-14.5'
                     ></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverCode}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'238px'}
                  marginButtonArrowLeft={'35px'}
               >
                  <div className='searchHoverIcon'>
                     Code
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>C</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
            <button
               onMouseOver={() => setIsHoverCodeBlock(true)}
               onMouseOut={() => setIsHoverCodeBlock(false)}
            >
               <svg data-ufvi='true' viewBox='0 0 20 20'>
                  <g fill='none'>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M15.25 3.752h2a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-3.5'
                     ></path>
                     <path
                        fill='currentColor'
                        d='M11.56 3.502a.75.75 0 1 0-1.12.996l1.12-.996ZM13 6.252l.56.498a.75.75 0 0 0 0-.996l-.56.498Zm-2.56 1.75a.75.75 0 1 0 1.12.996l-1.12-.996Zm0-3.504 2 2.252 1.12-.996-2-2.252-1.12.996Zm2 1.255-2 2.249 1.12.996 2-2.248-1.12-.997Zm-9.5 3.245a.75.75 0 1 0 1.12-.996l-1.12.996ZM1.5 6.252l-.56-.498a.75.75 0 0 0 0 .996l.56-.498Zm2.56-1.754a.75.75 0 1 0-1.12-.996l1.12.996Zm0 3.504-2-2.249-1.12.997 2 2.248 1.12-.996Zm-2-1.252 2-2.252-1.12-.996-2 2.252 1.12.996Z'
                     ></path>
                     <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='M8.5 2.5 6 10'
                     ></path>
                  </g>
               </svg>
            </button>
            {focusInput && (
               <HoverIcon
                  isHover={isHoverCodeBlock}
                  marginBlockTop={'-70px'}
                  marginBlockLeft={'258px'}
                  marginButtonArrowLeft={'55px'}
               >
                  <div className='searchHoverIcon'>
                     Code Block
                     <div>
                        <span>Ctrl</span>
                        <span>Shift</span>
                        <span>C</span>
                        <span>G</span>
                     </div>
                  </div>
               </HoverIcon>
            )}
         </div>
      );
   },
);
