import React, {FC, memo, useState} from 'react';
import "./CurrentChannel.scss"
import {About} from "../components/About/About";
import {Members} from "../components/Members/Members";
import {participants} from '../../../../../services/participant.service';
import {Integrations} from "../components/Integrations/Integrations";
import {Settings} from "../components/Settings";
import {CurrentChannelType} from "./CurrentChannelType";
import ChannelState from "../../../../../store/channel";
import {HoverIcon} from "../../../../common/HoverIcon";

export const CurrentChannel: FC<CurrentChannelType> = memo(({setIsModalChanelName}) => {
    const [tab, setTab] = useState(1);
    const [isHoverStar, setIsHoverStar] = useState<boolean>(false);
    const [isHoverBell, setIsHoverBell] = useState<boolean>(false);
    const [isHoverTelephone, setIsHoverTelephone] = useState<boolean>(false);

    return (
        <>
            <div className='widthMessageHeader'>
                <div className="containerCurrentChannel">
                    <div className="headerCurrentChannel">
                        <h1>
                            <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                      d="M9 4 6.5 18m7.25-14-2.5 14M4 8h13M3 14.5h13"></path>
                            </svg>
                            {ChannelState.initialState.name}
                        </h1>
                        <button onClick={() => setIsModalChanelName(false)}>
                            <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                                      d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="buttonCurrentChannel">
                        <HoverIcon
                            isHover={isHoverStar}
                            marginBlockTop={'-40px'}
                            marginBlockLeft={'-5%'}
                            marginButtonArrowLeft={"25px"}
                        >
                            <div>
                                Start Channel
                            </div>
                        </HoverIcon>
                        <button
                            onMouseOver={() => setIsHoverStar(!isHoverStar)}
                            onMouseOut={() => setIsHoverStar(!isHoverStar)}
                            className="selectedCurrentChannel"
                        />
                        <HoverIcon
                            isHover={isHoverBell}
                            marginBlockTop={'-120px'}
                            marginBlockLeft={'6%'}
                            marginButtonArrowLeft={"65px"}
                        >
                            <div style={{
                                textAlign: "center"
                            }}>
                                <div>To choose what you're</div>
                                <div>notified about in this channel,</div>
                                <div>first enable desktop</div>
                                <div>notifications</div>
                            </div>
                        </HoverIcon>
                        <button
                            onMouseOver={() => setIsHoverBell(!isHoverBell)}
                            onMouseOut={() => setIsHoverBell(!isHoverBell)}
                            className="notificationsCurrentChannel"
                        >Enable Notifications
                        </button>
                        <HoverIcon
                            isHover={isHoverTelephone}
                            marginBlockTop={'-86px'}
                            marginBlockLeft={'30%'}
                            marginButtonArrowLeft={"55px"}
                        >
                            <div style={{
                                textAlign: "center"
                            }}
                            >
                                <div>To start a call in a channel,</div>
                                <div>check out our paid plans.</div>
                            </div>
                        </HoverIcon>
                        <button
                            onMouseOver={() => setIsHoverTelephone(!isHoverTelephone)}
                            onMouseOut={() => setIsHoverTelephone(!isHoverTelephone)}
                            className="callCurrentChannel" disabled={true}
                        >
                            Start a Call
                        </button>
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
                            Members {participants.length}
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
                        />
                        <Members
                            tab={tab}
                            setTab={setTab}
                        />
                        <Integrations
                            tab={tab}
                            setTab={setTab}
                        />
                        <Settings
                            tab={tab}
                            setTab={setTab}
                        />
                    </div>
                </div>
            </div>
        </>
    );
});


