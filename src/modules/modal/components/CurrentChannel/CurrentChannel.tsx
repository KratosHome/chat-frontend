import React, {FC, memo, useState} from 'react';
import "./CurrentChannel.scss"
import {About} from "./components/About/About";
import {Members} from "./components/Members/Members";
import {CSSTransition} from "react-transition-group";

type CurrentChannel = {
    currentChannel: any
}

export const CurrentChannel: FC<CurrentChannel> = memo(({currentChannel}) => {

    const [tab, setTab] = useState(1);

    return (
        <div className='container-menu'>
            <div className="containerCurrentChannel">
                <div className="headerCurrentChannel">
                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                              d="M9 4 6.5 18m7.25-14-2.5 14M4 8h13M3 14.5h13"></path>
                    </svg>
                    <h1>
                        {currentChannel}
                    </h1>
                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                              d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"></path>
                    </svg>
                </div>
                <div className="buttonCurrentChannel">
                    <button className="selectedCurrentChannel"/>
                    <button className="notificationsCurrentChannel">Enable Notifications</button>
                    <button className="callCurrentChannel">Start a Call</button>
                </div>
                <div className="tabsNameCurrentChannel">
                    <div onClick={() => setTab(1)}>
                        About
                    </div>
                    <div onClick={() => setTab(2)}>
                        Members 1
                    </div>
                    <div onClick={() => setTab(3)}>
                        Integrations
                    </div>
                    <div onClick={() => setTab(4)}>
                        Settings
                    </div>
                </div>
                <div className="tabsContainersCurrentChannel">
                    <CSSTransition in={tab === 1} classNames="alert" timeout={300} unmountOnExit>
                        <About
                            tab={tab}
                            setTab={setTab}
                        />
                    </CSSTransition>
                    <CSSTransition in={tab === 2} classNames="alert" timeout={300} unmountOnExit>
                        <Members
                            tab={tab}
                            setTab={setTab}
                        />
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
});


