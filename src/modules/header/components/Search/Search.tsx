import React, { useEffect, useState } from 'react';
import { HoverIcon } from '../../../UI/HoverIcon';
import { FilterMenu, ReactModal } from '../../../modal';
import './Search.scss';
import { SearchType } from './SearchType';

export const Search: React.FC<SearchType> = ({
   oenModal,
   modalFilterOpenFunction,
}) => {
   const filterPopupPosition = 'filter-popup-position';

   const [isModalFilterOpen, setIsModalFilterOpen] = useState<boolean>(false);

   const [isHoverSearch, setIsHoverSearch] = useState<boolean>(false);
   const [isHoverFilter, setIsHoverFilter] = useState<boolean>(false);

   const handleFilterClose = () => {
      setIsModalFilterOpen(false);
   };

   const handleFilterOpen = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      setIsModalFilterOpen(true);
   };

   useEffect(() => {
      modalFilterOpenFunction(setIsModalFilterOpen);
   }, []);

   return (
      <>
         <div className='header__search' onClick={() => oenModal(true)}>
            <span
               className='header__search-field'
               onMouseOver={() => setIsHoverSearch(true)}
               onMouseOut={() => setIsHoverSearch(false)}
            >
               Search Company Name
            </span>
            <div className='header__box-filter' onClick={handleFilterOpen}>
               <a
                  className='header__button-filter'
                  onMouseOver={() => setIsHoverFilter(true)}
                  onMouseOut={() => setIsHoverFilter(false)}
               >
                  <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeWidth='1.5'
                        d='M 15.25 4.25 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 2.5 m -15.5 0 h 9 m 3 11.5 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 3.5 m -15.5 0 h 8 m -2 -5.75 a 1.75 1.75 0 1 1 -3.5 0 a 1.75 1.75 0 0 1 3.5 0 Z m 0 0 h 9.5 M 4.5 10 H 2.25'
                     ></path>
                  </svg>
               </a>
               <HoverIcon
                  isHover={isHoverFilter}
                  marginArrowLeft={'6px'}
                  marginBlockTop={'30px'}
                  marginBlockLeft={'-21px'}
               >
                  Filter
               </HoverIcon>
            </div>
            <div className='header__magnifier'>
               <i>
                  <svg data-som='true' aria-hidden='true' viewBox='0 0 20 20'>
                     <path
                        fill='currentColor'
                        d='M 17.22 18.28 a 0.75 0.75 0 1 0 1.06 -1.06 l -1.06 1.06 Z M 15 9 a 6 6 0 0 1 -6 6 v 1.5 A 7.5 7.5 0 0 0 16.5 9 H 15 Z m -6 6 a 6 6 0 0 1 -6 -6 H 1.5 A 7.5 7.5 0 0 0 9 16.5 V 15 Z M 3 9 a 6 6 0 0 1 6 -6 V 1.5 A 7.5 7.5 0 0 0 1.5 9 H 3 Z m 6 -6 a 6 6 0 0 1 6 6 h 1.5 A 7.5 7.5 0 0 0 9 1.5 V 3 Z m 4.47 11.53 l 3.75 3.75 l 1.06 -1.06 l -3.75 -3.75 l -1.06 1.06 Z'
                     ></path>
                  </svg>
               </i>
            </div>
            <HoverIcon
               isHover={isHoverSearch}
               marginArrowLeft={'45px'}
               marginBlockTop={'30px'}
               marginBlockLeft={'18%'}
            >
               <div className='searchHoverIcon'>
                  Search My company
                  <div>
                     <span>Ctrl</span>
                     <span>G</span>
                  </div>
               </div>
            </HoverIcon>
         </div>
         <ReactModal
            isModalOpen={isModalFilterOpen}
            onClose={handleFilterClose}
            modalPosition={filterPopupPosition}
            onBlur={true}
         >
            <FilterMenu onClose={handleFilterClose} />
         </ReactModal>
      </>
   );
};
