
import React from 'react';
import './AddBookmarkMenuDescription.scss';
import { AddBookmarkMenuDescriptionType } from './AddBookmarkMenuDescriptionType';

export const AddBookmarkMenuDescription: React.FC<AddBookmarkMenuDescriptionType> = ({ onClose }) => {
   return (
    <div className='add-bookmark-menu-description__container' >
        <img 
            src="https://a.slack-edge.com/bv1-9/bbar-edu-transparent-157c5a8.svg" 
            alt="Bookmarks bar information illustration"  
         />
        <div className='add-bookmark-menu-description__text-container'>
            <p className='add-bookmark-menu-description__text-title'>Bookmark important links for your team</p>
            <p className='add-bookmark-menu-description__text'>
                Add bookmarks for links you want to find quickly. All channel members can see the bookmarks you add.
            </p>
        </div>
        <div className='add-bookmark-menu-description__close-button-container'>
        <div 
            className='add-bookmark-menu-description__close-button'
            onClick={onClose}>
            <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                <path 
                    fill="#1d1c1d" 
                    stroke="currentColor"
                    strokeLinecap="round" 
                    strokeWidth="2.3" 
                    d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546">
                </path>
            </svg>
        </div>
        </div>
    </div>
    );
};
