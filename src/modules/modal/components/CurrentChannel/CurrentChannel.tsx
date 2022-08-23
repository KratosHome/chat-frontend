import React, {FC, memo, useState} from 'react';
import "./CurrentChannel.scss"
import {About} from "./components/About/About";
import {Members} from "./components/Members/Members";

type CurrentChannel = {
    currentChannel: any
    setIsModalChanelName: any
}

export const CurrentChannel: FC<CurrentChannel> = memo(({currentChannel, setIsModalChanelName}) => {

    const [tab, setTab] = useState(1);

    return (
        <div className='widthMessageHeader'>
            <div className="containerCurrentChannel">
                <div className="headerCurrentChannel">
                    <h1>
                        <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                  d="M9 4 6.5 18m7.25-14-2.5 14M4 8h13M3 14.5h13"></path>
                        </svg>
                        {currentChannel}
                    </h1>
                    <button onClick={() => setIsModalChanelName(false)}>
                        <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                                  d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"></path>
                        </svg>
                    </button>
                </div>
                <div className="buttonCurrentChannel">
                    <button className="selectedCurrentChannel"/>
                    <button className="notificationsCurrentChannel">Enable Notifications</button>
                    <button className="callCurrentChannel" disabled={true}>Start a Call</button>
                </div>
                <div className="tabsNameCurrentChannel">
                    <button
                        className={tab === 1 ? "isTabsNameCurrentChannel" : ""}
                        onClick={() => setTab(1)}>
                        About
                    </button>
                    <button
                        className={tab === 2 ? "isTabsNameCurrentChannel" : ""}
                        onClick={() => setTab(2)}
                    >
                        Members 1
                    </button>
                    <button className={tab === 3 ? "isTabsNameCurrentChannel" : ""}
                            onClick={() => setTab(3)}
                    >
                        Integrations
                    </button>
                    <button className={tab === 4 ? "isTabsNameCurrentChannel" : ""}
                            onClick={() => setTab(4)}
                    >
                        Settings
                    </button>
                </div>
                <div className="tabsContainersCurrentChannel">
                    <About
                        tab={tab}
                        setTab={setTab}
                        currentChannel={currentChannel}
                    />
                    <Members
                        tab={tab}
                        setTab={setTab}
                    />
                </div>
            </div>
        </div>
    );
});


