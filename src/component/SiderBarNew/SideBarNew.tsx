import React, {FC, memo} from 'react';
import "./SideBarNew.scss"
import {ChatList} from "../sidebar/ChatList";
import {Logo} from "../Logo/Logo";


type SideBarNewType = {
    setCurrentChannel: any
}

export const SideBarNew: FC<SideBarNewType> = memo(({setCurrentChannel}) => {
    return (
        <div className="containerSideBar">
            <div className="headSideBar">
                <Logo/>
                <div className="brend">
                    <span>Company Name</span>
                        <svg data-0v2="true" aria-hidden="true" viewBox="0 0 20 20" className="">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5" d="M13.75 8 10 11.75 6.25 8"></path>
                        </svg>
                </div>
                <div>
                    <svg data-0v2="true" aria-hidden="true" viewBox="0 0 20 20" className="">
                        <g fill="none">
                            <path fill="currentColor"
                                  d="M9.75 4a.75.75 0 0 0 0-1.5V4Zm7.75 6.25a.75.75 0 0 0-1.5 0h1.5ZM13.75 17h-8.5v1.5h8.5V17ZM3 14.75v-8.5H1.5v8.5H3ZM5.25 4h4.5V2.5h-4.5V4ZM16 10.25v4.5h1.5v-4.5H16ZM5.25 17A2.25 2.25 0 0 1 3 14.75H1.5a3.75 3.75 0 0 0 3.75 3.75V17Zm8.5 1.5a3.75 3.75 0 0 0 3.75-3.75H16A2.25 2.25 0 0 1 13.75 17v1.5ZM3 6.25A2.25 2.25 0 0 1 5.25 4V2.5A3.75 3.75 0 0 0 1.5 6.25H3Z"></path>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="m8 9.5-.75 3.25L10.5 12l6.763-6.763a1.75 1.75 0 0 0 0-2.474l-.026-.026a1.75 1.75 0 0 0-2.474 0L8 9.5ZM14 4l2 2"></path>
                        </g>
                    </svg>
                </div>
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
