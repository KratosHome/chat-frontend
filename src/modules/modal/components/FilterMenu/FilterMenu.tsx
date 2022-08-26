import React, { useEffect, useState } from 'react';
import { HoverIcon } from '../../../UI/HoverIcon';
import { FilterMenuCheckbox } from '../FilterMenuCheckbox';
import { FilterMenuItem } from '../FilterMenuItem';
import './FilterMenu.scss';
import { FilterMenuPropsType } from './FilterMenuType';

export const FilterMenu: React.FC<FilterMenuPropsType> = ({ onClose }) => {
   const [isHoverClear, setIsHoverClear] = useState<boolean>(false);

   const [isSearchButtonBlocked, setIsSearchButtonBlocked] =
      useState<boolean>(true);

   const [clearInput, setClearInput] = useState<
      React.Dispatch<React.SetStateAction<string>>[]
   >([]);

   const [fieldsValue, setFieldsValue] = useState<string[]>([]);

   const clearInputFunction = (
      callback: React.Dispatch<React.SetStateAction<string>>,
   ) => {
      setClearInput((prev) => {
         let mySet: Set<React.Dispatch<React.SetStateAction<string>>> = new Set(
            [...prev],
         );
         mySet.add(callback);

         return [...mySet];
      });
   };

   const fieldsValueFunction = (callback: string) => {
      setFieldsValue((prev) => {
         prev = [];
         prev.push(callback);

         return prev;
      });
   };

   useEffect(() => {
      fieldsValue.forEach((el) => {
         if (el !== '') {
            setIsSearchButtonBlocked(false);
         } else {
            setIsSearchButtonBlocked(true);
         }
      });
   });

   return (
      <div className='dark-container-menu filter'>
         <div className='filter__header'>
            <div className='filter__title'>
               <div className='filter__title-text'>
                  <h1>Filter By</h1>
               </div>
               <button
                  className='button-unstyled filter__button filter__button-clear'
                  onClick={() => clearInput!.forEach((el) => el(''))}
                  onMouseOver={() => setIsHoverClear(true)}
                  onMouseOut={() => setIsHoverClear(false)}
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     viewBox='0 0 315.001 315.001'
                     xmlnsXlink='http://www.w3.org/1999/xlink'
                     enable-background='0 0 315.001 315.001'
                     fill='currentColor'
                  >
                     <path d='m312.951,2.05c-2.733-2.731-7.165-2.732-9.9,0l-132.826,132.824c-2.661-1.336-5.511-2.049-8.468-2.049-7.14,0-13.186,3.962-16.813,7.048-3.48-0.997-7.107-1.501-10.828-1.501-19.045,0-38.755,13.193-58.068,27.796-0.002,0.001-0.003,0.002-0.005,0.004-3.023,2.285-6.036,4.604-9.035,6.913l-.975,.751c-31.116,23.949-62.928,47.934-63.247,48.174-1.618,1.22-2.628,3.081-2.769,5.102-0.141,2.021 0.601,4.005 2.033,5.438l80.4,80.4c1.317,1.316 3.101,2.05 4.95,2.05 0.162,0 0.325-0.006 0.488-0.017 2.021-0.142 3.882-1.152 5.102-2.771 0.239-0.317 24.222-32.129 48.175-63.248l.76-.986c19.943-25.901 40.528-52.636 33.207-77.93 2.977-3.502 6.767-9.254 7.027-16.062 0.124-3.229-0.584-6.333-2.032-9.215l132.824-132.821c2.733-2.734 2.733-7.166 0-9.9zm-170.333,221.813l-51.471-51.475c4.971-3.616 9.916-7.013 14.771-9.942l46.671,46.673c-2.917,4.807-6.312,9.731-9.971,14.744zm-12.546,16.563c-17.571,22.827-35.156,46.024-43.408,56.937l-9.466-9.466 23.992-27.241c2.556-2.901 2.274-7.325-0.626-9.88-2.902-2.556-7.326-2.274-9.88,0.626l-23.405,26.576-10.18-10.18 8.904-8.903c2.734-2.733 2.734-7.166 0.001-9.899-2.733-2.733-7.166-2.733-9.899-0.001l-8.905,8.904-10.178-10.178 26.573-23.406c2.901-2.556 3.182-6.979 0.626-9.88-2.556-2.902-6.979-3.182-9.88-0.626l-27.239,23.992-9.465-9.465c10.912-8.252 34.108-25.838 56.936-43.407l.976-.752c1.427-1.099 2.857-2.2 4.29-3.298l54.28,54.283c-1.089,1.42-2.186,2.845-3.286,4.274l-.761,.99zm32.46-77.439c-2.321,1.99-3.083,5.257-1.88,8.068 3.259,7.619 2.262,16.02-1.348,24.979l-40.293-40.295c5.258-2.125 10.325-3.368 15.104-3.368 3.505,0 6.721,0.646 9.83,1.977 2.814,1.202 6.079,0.441 8.068-1.881 1.515-1.768 6.071-5.643 9.743-5.643 0.938,0 2.403,0.22 4.301,2.117 1.963,1.962 2.145,3.496 2.113,4.479-0.129,3.896-4.236,8.341-5.638,9.567z' />
                  </svg>
                  <HoverIcon
                     isHover={isHoverClear}
                     marginArrowLeft={'6px'}
                     marginBlockBottom={'-88px'}
                  >
                     Clear
                  </HoverIcon>
               </button>
            </div>
         </div>
         <div className='filter__content'>
            <div className='filter__content-container'>
               <FilterMenuItem
                  itemText={'Keywords'}
                  placeholderText={'ex. pto policy'}
                  clearInputFunction={clearInputFunction}
                  fieldsValueFunction={fieldsValueFunction}
               />
               <FilterMenuItem
                  itemText={'From'}
                  placeholderText={'ex. Zoe Maxwell'}
                  clearInputFunction={clearInputFunction}
                  fieldsValueFunction={fieldsValueFunction}
               />
               <FilterMenuItem
                  itemText={'In'}
                  placeholderText={'ex. #project-unicorn'}
                  clearInputFunction={clearInputFunction}
                  fieldsValueFunction={fieldsValueFunction}
               />
               <FilterMenuItem
                  itemText={'With'}
                  placeholderText={'ex. Lee Hao'}
                  clearInputFunction={clearInputFunction}
                  fieldsValueFunction={fieldsValueFunction}
               />
               <FilterMenuItem itemText={'Date'} isSelect={true} />
               <FilterMenuCheckbox itemText={"Only include channels I'm in"} />
               <FilterMenuCheckbox
                  itemText={'Exclude apps, bots and workflows'}
               />
            </div>
         </div>
         <div className='filter__footer'>
            <button className='button-unstyled filter__button-help'>
               <i className='filter__icon'>
                  <svg
                     enableBackground={'0 0 128 128'}
                     viewBox='0 0 128 128'
                     xmlSpace='preserve'
                     xmlns='http://www.w3.org/2000/svg'
                     xmlnsXlink='http://www.w3.org/1999/xlink'
                     fill='currentColor'
                  >
                     <g>
                        <path d='M64,1C29.3,1,1,29.3,1,64s28.3,63,63,63s63-28.3,63-63S98.7,1,64,1z M64,119C33.7,119,9,94.3,9,64S33.7,9,64,9   s55,24.7,55,55S94.3,119,64,119z' />
                        <rect height='40' width='10' x='60' y='54.5' />
                        <rect height='8' width='10' x='60' y='35.5' />
                     </g>
                  </svg>
               </i>
               Learn how to search in Chat-service
            </button>
            <div className='filter__footer-actions'>
               <button
                  className='popup-button--outline popup-button filter__footer-cancel'
                  onClick={onClose}
               >
                  Cancel
               </button>
               <button
                  className={`popup-button filter__footer-search ${
                     isSearchButtonBlocked ? 'button--disabled' : ''
                  }`}
                  disabled={isSearchButtonBlocked ? true : false}
               >
                  Search
               </button>
            </div>
         </div>
         <button
            className='button-unstyled filter__button filter__button-close'
            aria-label='Close'
            data-qa='close_modal_button'
            onClick={onClose}
         >
            <svg data-aqc='true' aria-hidden='true' viewBox='0 0 20 20'>
               <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='m 5.227 5.227 l 9.546 9.546 m 0 -9.546 l -9.546 9.546'
               ></path>
            </svg>
         </button>
      </div>
   );
};
