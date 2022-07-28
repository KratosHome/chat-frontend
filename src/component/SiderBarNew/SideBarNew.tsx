import React, {FC, memo} from 'react';
import "./SideBarNew.scss"
import {ChatList} from "../sidebar/ChatList";
import { SideBarHeader } from '../sidebar/SideBarHeader';

type SideBarNewType = {
    setCurrentChannel: any
}

export const SideBarNew: FC<SideBarNewType> = memo(({setCurrentChannel}) => {
    return (
        <div className="containerSideBar">
            <div>
                <SideBarHeader></SideBarHeader>
            </div>
            <div>
                <div>
                    <div>Threads</div>
                </div>
                <div>
                    <div>Mentions & reactions</div>
                </div>
                <div>
                    <div>Saved items</div>
                </div>
                <div>
                    <div>Slack Connect</div>
                </div>
                <div>
                    <div>More</div>
                </div>
            </div>
            <ChatList setCurrentChannel={setCurrentChannel}/>
            <div>Direct messages</div>
        </div>
    );
});
