import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import {MessageList} from './messages/MessageList';
import {SideBar} from './sidebar/SideBar';
import {messages} from '../services/message.service';
import MessageModel from '../dto/MessageModel';
import activeChatService from '../services/activeChat.service';
import {channels} from '../services/channels.service';
import {participants} from '../services/participant.service';
import {SideBarHeader} from './sidebar/SideBarHeader';
import {MessageHeader} from "./messages/MessageHeader";
import {TimeStamp} from "./messages/TimeStamp";
import {InputMessage} from "./InputMassage";
import {useHotkeys} from "react-hotkeys-hook";

export const Main: React.FC = () => {
    const [messageArr, setMessageArr] = useState<MessageModel[]>(messages);
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [visibleMessageField, setVisibleMessageField] = useState(true)
    const [currentChannelId, setCurrentChannelId] = useState<number>(1)
    const [currentUserId, setCurrentUserId] = useState<number>(1) // The rule is the 1st participant should be user, 0st - moderator
    let active = activeChatService.getActiveChatId();
    let channel = channels.find(x => x.id === active);
    let isInternal = channel ? channel.isInternal : true;
    const type = isInternal ? "internal-chat" : "external-chat";
    const topic = currentUserId == 1 ? type : "moderator";
    const currentUserName = participants[currentUserId].name;
    const displaySend = visibleMessageField ? 'displayNone' : '';
    const textArea = 'area ' + displaySend;

    useEffect(() => {
        const activeChat = activeChatService.getActiveChatId()

        if (activeChat !== 1) {
            setVisibleMessageField(false)
        }
        if (activeChat === 1) {
            setVisibleMessageField(true)
        }
        setCurrentChannelId(activeChat)
    }, [currentChannelId])

    const handleSendButton = (text: string, currentUserId: number, id: number) => {
        const nMess: MessageModel = {
            id: messageArr[messageArr.length - 1].id + 1,
            chatParticipantId: currentUserId,
            text: text,
            timeStamp: Date.now(),
            isEdited: false,
            isRead: false,
            chatChannelId: id,
            isUnderReview: false,
            sentTimeStamp: Date.now(),
            rejectedTimeStamp: Date.now(),
        }

        setMessageArr([...messageArr, nMess])
        setCurrentMessage('')
    }


    const tstamp: number = messages[0] ? messages[0].timeStamp : 0;

    useHotkeys('ctrl+k', () => setCurrentUserId(prevCount => prevCount === 1 ? 0 : 1));

    return (
        <div className={topic}>
            <div className="head_wrapper">
                <Header/>
            </div>

            <div className="cont_wrapper">
                <div className="cont">
                    <div className="sidebar box-1">
                        <div className="">
                            <SideBarHeader></SideBarHeader>
                        </div>
                        <div className="channels_wrapper">
                            <SideBar setCurrentChannel={setCurrentChannelId}/>
                        </div>
                    </div>
                    <div
                        className="wider">
                        <div className=" box-2">
                            <div className='header_cont'>
                                <MessageHeader currentChannel={activeChatService.getActiveChatName()}
                                               currentChannelId={currentChannelId}/>
                            </div>
                            <div className='main_cont'>
                                <TimeStamp data={tstamp}/>
                                <div className='message_cont'>
                                    <MessageList key='1' currentChannel={activeChatService.getActiveChatName()}
                                                 messages={messageArr}
                                                 currentChannelId={activeChatService.getActiveChatId()}/>
                                </div>
                                {/* Temporary */}
                            </div>
                        </div>
                        <InputMessage
                            placeholderName={channel?.name}
                            currentMessage={currentMessage}
                            visibleMessageField={visibleMessageField}
                            handleSendButton={handleSendButton}
                            currentChannelId={currentChannelId}
                            currentUserId={currentUserId}
                            setCurrentMessage={setCurrentMessage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
