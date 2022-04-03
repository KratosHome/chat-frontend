import React, { useState } from 'react';
import activeChatService from '../../services/activeChat.service';
import { channels } from '../../services/channels.service';
import { CollapseService } from '../../services/channels.service';
import { NewMessageWarning } from './NewMessageWarning';

export const ChatList: React.FC<any> = ({setCurrentChannel}) => {
    const [, setCount] = useState(0);
    var channelLists: JSX.Element[] = [];
    var indexLow = 1000;
    var indexUp = 1;
    const arrowDown: string = "fa-li fa-solid fa-angle-down fa-fw";
    const arrowRight: string = "fa-li fa-solid fa-angle-right fa-fw";

    reDefineFOrRendering();

    function reDefineFOrRendering() {
        pushRenderingList("", channels[0].name, 0, channels[0].id, false); // render news channel
        var projects: any[] = [...Array.from(new Set(channels.filter(x=>x.projectName.length > 0).map(project => project.projectName)))];
        projects.forEach(x => {
            let isCollapsed: boolean = CollapseService.getStatusProject(x);
            pushRenderingList(x, x, 0, 0, isCollapsed);
            if (!isCollapsed) {
                prepareForProjectSubstructureRendering(x);
            }
        });
    }

    function prepareForProjectSubstructureRendering(project: string) {
        const internalChat = channels.filter(x => x.projectName == project && x.isInternal == true);
        pushRenderingList(project, internalChat[0].name, 1, internalChat[0].id, false);
        const subchats: any[] = [...Array.from(new Set(channels.filter(x => x.projectName == project && x.externalSubchatName.length > 0).map(subchat => subchat.externalSubchatName)))];
        subchats.forEach(x => {
            let isCollapsed: boolean = CollapseService.getStatusSubchats(project, x);
            pushRenderingList(project, x, 1, 0, isCollapsed);
            if (!isCollapsed) {
                prepareForSubchatSubstructureRendering(project, x);
            }
        });
    }

    function prepareForSubchatSubstructureRendering(project: string, subchat: string) {
        channels.filter(x => x.projectName == project && x.externalSubchatName == subchat).forEach(x => {
            pushRenderingList(project, x.name, 2, x.id, false);
        })
    }

    function pushRenderingList(projectName: string, channelName: string, level: number, id: number, isCollapsed: boolean) {
        const arrow: string = isCollapsed ? arrowRight : arrowDown;
        const prefix: string = id != 0 ? "fa-li fa-solid fa-hashtag fa-fw c-icon2" : arrow;
        const selector: string = activeChatService.isThisChatActive(id) && id != 0 ? "select" : "";
        const messageWarning: JSX.Element = selector == "" ? <span><NewMessageWarning projectName={projectName} 
                    channelName={channelName}
            isCollapsed={isCollapsed} channelId={id} /></span> : <span></span>;
        const callbackFunction = () => {
            setCurrentChannel(channelName)
            change(projectName, channelName);
            activeChatService.setActiveChat(id);
            setCount(prevCount => prevCount + 1);
        }
        
        const element: JSX.Element = 
            <div className={selector}>
                <ul className="fa-ul">
                    <li onClick={callbackFunction} key={indexLow++} className={"level level" + level}>
                        <i className={prefix + " " + selector + "-font"}></i>
                        <span className={selector + "-font"}>{channelName} </span>
                        {messageWarning}
                    </li>
                </ul>
            </div>;

        channelLists.push(element);
    }

    const change = (projectName: string, channelName: string) => {
        if (channelName != projectName) {
            CollapseService.changeSubchatsService(projectName, channelName);
        } else {
            CollapseService.changeStatusProject(channelName);
        }
    };

    const finalRendering = channelLists.map((oneTire) =>
        <div key={indexUp++}>{oneTire}</div>
    );

    return (
        <div id="Chatlist" className='chatlist'>
            {finalRendering}
        </div>
    )
}