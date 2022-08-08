import React, {useEffect, useState} from 'react';
import {participants} from '../../services/participant.service'
import {Message} from './Message/Message';
import activeChatService from '../../services/activeChat.service';
import {MessageListType} from "./MessageListType";


export const MessageList: React.FC<MessageListType> = ({
                                                           messages,
                                                           currentChannel,
                                                           setNewMassaeg
                                                       }) => {

    const newsMessages = messages.filter(el => el.chatChannelId === activeChatService.getActiveChatId())
    useEffect(() => {
        setNewMassaeg(newsMessages)
    }, [currentChannel, messages])

    // if(newsMessages[0])setCurrentTimeStamp(`${new Date(newsMessages[0].timeStamp).getDay().toString()}   ${new Date(newsMessages[0].timeStamp).getFullYear().toString()}`)
    const mess = newsMessages.map(e => {
        const patisipant = participants.find(elem => elem.id === e.chatParticipantId)
        return (
            <div className='containerMessageList'>
                <Message
                    key={e.id + 1}
                    partisipantId={patisipant?.id}
                    partisipant={patisipant?.name}
                    time={e.timeStamp}
                    message={e.text}
                    messageTime={e.messageText}
                />
            </div>
        )
    });


    return (
        <div className="main_border">
            <div className="msg_cont">
                {mess}
            </div>
        </div>
    )
}
