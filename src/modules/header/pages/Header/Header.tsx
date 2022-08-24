import React, { memo, useState } from 'react';
import './Header.scss';
import { History } from '../../components/History';
import { Search } from '../../components/Search';
import { Help } from '../../components/Help';
import { HeaderType } from './HeaderType';
import { ReactModal, SearchModal } from '../../../modal';

export const Header: React.FC<HeaderType> = memo(
   ({ currentUserName, chanelName }) => {
      const searchHeaderPosition = 'search-header-position';

      const [modalFilterOpen, setModalFilterOpen] =
         useState<React.Dispatch<React.SetStateAction<boolean>>>();

      const [isModalSearchOpen, setIsModalSearchOpen] =
         useState<boolean>(false);

      const modalFilterOpenFunction = (
         callback: React.Dispatch<React.SetStateAction<boolean>>,
      ) => {
         setModalFilterOpen(() => callback);
      };

      return (
         <>
            <header className='header'>
               <div className='header__container'>
                  <History />
                  <Search
                     oenModal={setIsModalSearchOpen}
                     modalFilterOpenFunction={modalFilterOpenFunction}
                  />
                  <Help currentUserName={currentUserName} />
               </div>
            </header>
            <ReactModal
               isModalOpen={isModalSearchOpen}
               onClose={() => setIsModalSearchOpen(!isModalSearchOpen)}
               modalPosition={searchHeaderPosition}
            >
               <SearchModal
                  chanelName={chanelName}
                  onClose={setIsModalSearchOpen}
                  modalFilterOpen={modalFilterOpen!}
               />
            </ReactModal>
         </>
      );
   },
);
