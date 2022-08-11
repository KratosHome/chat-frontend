import React, { useEffect } from 'react';
import { participants } from '../../../../services/participant.service';
import { Message } from '../Message';
import activeChatService from '../../../../services/activeChat.service';
import { MessageListType } from './MessageListType';
import './MessageList.scss';

export const MessageList: React.FC<MessageListType> = ({
   messages,
   currentChannel,
   setNewMessage,
}) => {
   const newsMessages = messages.filter(
      (el) => el.chatChannelId === activeChatService.getActiveChatId()
   );
   useEffect(() => {
      setNewMessage(newsMessages);
   }, [currentChannel, messages]);

   // if(newsMessages[0])setCurrentTimeStamp(`${new Date(newsMessages[0].timeStamp).getDay().toString()}   ${new Date(newsMessages[0].timeStamp).getFullYear().toString()}`)
   const mess = newsMessages.map((e) => {
      const participant = participants.find(
         (elem) => elem.id === e.chatParticipantId
      );
      return (
         <div className='container-message-list'>
            <Message
               key={e.id + 1}
               participantId={participant?.id}
               participant={participant?.name}
               time={e.timeStamp}
               message={e.text}
               messageTime={e.messageText}
            />
         </div>
      );
   });

   return (
      <div className='main-border'>
         <div className='message-container'>{mess}</div>
      </div>
   );
};
