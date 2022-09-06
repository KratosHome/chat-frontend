
import React, { memo } from 'react';


import './ExploreButton.scss';
import { ExploreButtonType } from './ExploreButtonType';



export const ExploreButton: React.FC<ExploreButtonType> = memo(
   ({title,src}) => {
      return (
        <div className='explore__button'>
            <div className='explore__icon-container'> 
                <img height="30px" width="30px" src={src}/>
            </div>
            <p>{title}</p>
        </div>
      );
   },
);