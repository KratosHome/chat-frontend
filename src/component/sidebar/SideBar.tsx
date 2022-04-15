import React, { useState } from 'react';
import { channels } from '../../services/channels.service'
import { ChatList } from './ChatList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

interface ISidebarProps{
  setCurrentChannel:any 
}

export const  SideBar: React.FC<ISidebarProps> = ({setCurrentChannel}) => {
  const newsChannelIdx = channels.findIndex(el => el.id === 1)
  return (
    <section className="col-sm-2 col-md-2 sidebar text-white d-flex flex-column" id="Navbar">
      <div className="logo_section_wrapper">
      <div className="logo_section">
      <div className='logo_fox logo'>
          <svg width="49" height="44" viewBox="0 0 49 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1.5" x2="26.2699" y2="-1.5" transform="matrix(0.327588 0.944821 0.962088 -0.272739 39.9141 1.13379)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="44.7902" y2="-1.5" transform="matrix(-0.347829 0.937558 0.956944 0.290274 39.9141 1)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="33.063" y2="-1.5" transform="matrix(-0.641731 0.76693 0.825331 0.56465 45.5508 17.6367)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="29.9758" y2="-1.5" transform="matrix(-0.806819 0.590799 0.667148 0.744925 48.5195 25.9551)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="26.2699" y2="-1.5" transform="matrix(-0.327588 0.944821 -0.962088 -0.272739 8.60547 1.26758)" stroke="#00C944" strokeWidth="3" />
            <line y1="-1.5" x2="44.7902" y2="-1.5" transform="matrix(0.347829 0.937558 -0.956944 0.290274 8.60547 1.13379)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="33.063" y2="-1.5" transform="matrix(0.641731 0.76693 -0.825331 0.56465 2.96875 17.7705)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="29.9758" y2="-1.5" transform="matrix(0.806819 0.590799 -0.667148 0.744925 0 26.0879)" stroke="#7A8594" strokeWidth="3" />
            <line y1="-1.5" x2="41.5474" y2="-1.5" transform="matrix(0.999953 -0.00965321 0.0118061 0.99993 3.26367 17.7705)" stroke="#7A8594" strokeWidth="3" />
            <path d="M24.2607 36.9746L31.824 16.5743H16.6974L24.2607 36.9746Z" fill="#FA3100" />
            <path d="M25.9617 36.6211L40.2264 20.3745L32.8807 16.8428L25.9617 36.6211Z" fill="#FF6200" />
            <path d="M22.2453 36.707L7.98067 20.4604L15.3263 16.9287L22.2453 36.707Z" fill="#C4C4C4" />
            <path d="M37.8457 22.9355L42.8879 17.0129H32.8035L37.8457 22.9355Z" fill="#FF6200" />
            <path d="M10.3614 23.0215L5.31918 17.0988H15.4036L10.3614 23.0215Z" fill="#C4C4C4" />
          </svg>
        </div>
        <div className="chatname">
        <p>Chat Integrator</p>
        </div>
        <div className="edit">
          <a>
          <FontAwesomeIcon icon={faPenToSquare} />
          </a>
        </div>
      </div>
      </div>
      <div className="chatList_wrapper">
        <div className="chatLists">
          <div className="blank_space"></div>
          <ChatList setCurrentChannel={setCurrentChannel} />
        </div>
      </div>
    </section>
  )
}
