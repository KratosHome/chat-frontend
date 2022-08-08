import React, {useEffect, useState} from 'react';
import {Header} from './Header';
import {MessageHeader, MessageList, TimeStamp} from './messages/';
import {messages} from '../services/message.service';
import MessageModel from '../dto/MessageModel';
import activeChatService from '../services/activeChat.service';
import {channels} from '../services/channels.service';
import {participants} from '../services/participant.service';
import {InputMessage} from './InputMessage';
import {useHotkeys} from 'react-hotkeys-hook'
import {SideBar} from './SideBar';


export const Main: React.FC = () => {
    const [messageArr, setMessageArr] = useState<MessageModel[]>(messages);
    const [currentMessage, setCurrentMessage] = useState<string>('');
    const [visibleMessageField, setVisibleMessageField] = useState(true);
    const [currentChannelId, setCurrentChannelId] = useState<number>(1);
    const [currentUserId, setCurrentUserId] = useState<number>(1); // The rule is the 1st participant should be user, 0st - moderator
    let active = activeChatService.getActiveChatId();
    let channel = channels.find((x) => x.id === active);
    let isInternal = channel ? channel.isInternal : true;
    const type = isInternal ? 'internal-chat' : 'external-chat';
    const topic = currentUserId == 1 ? type : 'moderator';
    const currentUserName = participants[currentUserId].name;
    const displaySend = visibleMessageField ? 'displayNone' : '';
    const textArea = 'area ' + displaySend;

    useEffect(() => {
        const activeChat = activeChatService.getActiveChatId();

        if (activeChat !== 1) {
            setVisibleMessageField(false);
        }
        if (activeChat === 1) {
            setVisibleMessageField(true);
        }
        setCurrentChannelId(activeChat);
    }, [currentChannelId]);


    const [newsMessages, setNewMassaeg] = useState(messages)
    const timeMassag = newsMessages.map(item => item.timeStamp)
    let lastElemTime = timeMassag[timeMassag.length - 1];


    let lastElemMeassag = messages[messages.length - 1];


    const handleSendButton = (
        text: string,
        currentUserId: number,
        id: number
    ) => {
        let nMess: MessageModel
        if (lastElemTime >= Date.now() - 300000) {
            let LastEl = messageArr[messageArr.length - 1];
            LastEl.text = LastEl.text + " " + currentMessage
        } else {
            nMess = {
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
            };
            setMessageArr([...messageArr, nMess]);
        }
        setCurrentMessage('');
    };


    const changeUser = () => {
        let nextUser = currentUserId == 1 ? 0 : 1;
        setCurrentUserId(nextUser);
    };

    const tstamp: number = messages[0] ? messages[0].timeStamp : 0;

    useHotkeys('ctrl+k', () => setCurrentUserId(prevCount => prevCount === 1 ? 0 : 1));


    return (
        <div className={topic}>
            <div className='head_wrapper'>
                <Header/>
            </div>
            <div className="cont_wrapper">
                <div className="cont">
                    <SideBar setCurrentChannel={setCurrentChannelId}/>
                    <div
                        className="wider">
                        <div className="box-2">
                            <MessageHeader currentChannel={activeChatService.getActiveChatName()}
                                           currentChannelId={currentChannelId}/>
                            <div className='message_cont'>
                                <TimeStamp data={tstamp}/>
                                <MessageList
                                    key='1'
                                    currentChannel={activeChatService.getActiveChatName()}
                                    messages={messageArr}
                                    currentChannelId={activeChatService.getActiveChatId()}
                                    currentMessage={currentMessage}
                                    setNewMassaeg={setNewMassaeg}
                                />
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

