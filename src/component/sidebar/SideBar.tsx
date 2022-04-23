import React, {useState} from 'react';
import {channels} from '../../services/channels.service'
import {ChatList} from './ChatList';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

interface ISidebarProps {
    setCurrentChannel: any
}

export const SideBar: React.FC<ISidebarProps> = ({setCurrentChannel}) => {
    const newsChannelIdx = channels.findIndex(el => el.id === 1)
    return (
        <section className="sidebar" id="Navbar">

            <div className="chatList_wrapper">
                <div className="chatLists">
                    <div className="blank_space"></div>
                    <ChatList setCurrentChannel={setCurrentChannel}/>
                </div>
            </div>
        </section>
    )
}
