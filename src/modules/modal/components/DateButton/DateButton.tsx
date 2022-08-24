import React from 'react';
import { MenuItem } from '../MenuItem';
import { MenuSeparatorItem } from '../MenuSeparatorItem';

export const DateButton = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <div className='container-menu__header'>Jump to...</div>
            <MenuItem itemText={'Most recent'} />
            <MenuItem itemText={'Last week'} />
            <MenuItem itemText={'Last month'} />
            <MenuSeparatorItem />
            <MenuItem itemText={'Jump to a specific date'} />
         </div>
      </div>
   );
};
