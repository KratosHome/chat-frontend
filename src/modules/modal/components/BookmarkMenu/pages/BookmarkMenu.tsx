import React from 'react';
import { MenuBookmarkItem } from '../components/MenuBookmarkItem';
import { MenuSeparatorItem } from '../../MenuSeparatorItem';

export const BookmarkMenu: React.FC = () => {
   return (
      <div className='container-menu'>
         <div className='container-menu__items'>
            <MenuBookmarkItem
               itemText={'Add a bookmark to this channel'}
               itemDescriptionText={"Easily find your team's important links"}
            >
               <span
                  className='item__icon item__icon--bookmark'
                  data-qa='team-directory'
               >
                  <svg
                     x='0px'
                     y='0px'
                     width='50'
                     height='50'
                     viewBox='0 0 30 30'
                     xmlns='http://www.w3.org/2000/svg'
                     fill='#000000'
                  >
                     <path d='M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z' />
                  </svg>
               </span>
            </MenuBookmarkItem>
            <MenuBookmarkItem
               itemText={'Create a folder'}
               itemDescriptionText={'Organize your bookmarks'}
            >
               <span
                  className='item__icon item__icon--bookmark'
                  data-qa='team-directory'
               >
                  <svg
                     xmlns='http://www.w3.org/2000/svg'
                     x='0px'
                     y='0px'
                     width='50'
                     height='50'
                     viewBox='0 0 65 65'
                     fill='#000000'
                  >
                     <path d='M 5 4 C 3.3544268 4 2 5.3555411 2 7 L 2 16 L 2 26 L 2 43 C 2 44.644459 3.3544268 46 5 46 L 45 46 C 46.645063 46 48 44.645063 48 43 L 48 26 L 48 16 L 48 11 C 48 9.3549372 46.645063 8 45 8 L 18 8 C 18.08657 8 17.96899 8.000364 17.724609 7.71875 C 17.480227 7.437136 17.179419 6.9699412 16.865234 6.46875 C 16.55105 5.9675588 16.221777 5.4327899 15.806641 4.9628906 C 15.391504 4.4929914 14.818754 4 14 4 L 5 4 z M 5 6 L 14 6 C 13.93925 6 14.06114 6.00701 14.308594 6.2871094 C 14.556051 6.5672101 14.857231 7.0324412 15.169922 7.53125 C 15.482613 8.0300588 15.806429 8.562864 16.212891 9.03125 C 16.619352 9.499636 17.178927 10 18 10 L 45 10 C 45.562937 10 46 10.437063 46 11 L 46 13.1875 C 45.685108 13.07394 45.351843 13 45 13 L 5 13 C 4.6481575 13 4.3148915 13.07394 4 13.1875 L 4 7 C 4 6.4364589 4.4355732 6 5 6 z M 5 15 L 45 15 C 45.56503 15 46 15.43497 46 16 L 46 26 L 46 43 C 46 43.562937 45.562937 44 45 44 L 5 44 C 4.4355732 44 4 43.563541 4 43 L 4 26 L 4 16 C 4 15.43497 4.4349698 15 5 15 z'></path>
                  </svg>
               </span>
            </MenuBookmarkItem>
            <MenuSeparatorItem />
            <div aria-hidden='true'>
               <p className='item__bookmark-description item__bookmark-description-bar'>
                  No recent links
               </p>
            </div>
         </div>
      </div>
   );
};
