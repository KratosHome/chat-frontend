import React from 'react';
import './Header.scss';
import { Help } from './Help';
import { History } from './History';
import { Search } from './Search';

export const Header: React.FC = () => {
   return (
      <header className='header'>
         <div className='header__container'>
            <History />
            <Search />
            <Help />
         </div>
      </header>
   );
};
