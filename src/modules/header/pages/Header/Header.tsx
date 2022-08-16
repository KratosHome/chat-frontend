import React from 'react';
import './Header.scss';
import { History } from '../../components/History';
import { Search } from '../../components/Search';
import { Help } from '../../components/Help';
import { HeaderType } from './HeaderType';

export const Header: React.FC<HeaderType> = ({ currentUserName }) => {
   return (
      <header className='header'>
         <div className='header__container'>
            <History />
            <Search />
            <Help currentUserName={currentUserName} />
         </div>
      </header>
   );
};
