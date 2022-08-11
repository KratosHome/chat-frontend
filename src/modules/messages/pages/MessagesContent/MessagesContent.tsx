import React, { useState } from 'react';
import MessageModel from '../../../../dto/MessageModel';
import { messages } from '../../../../services/message.service';
import { InputMessage } from '../../components/InputMessage';
import { MessageHeader } from '../../components/MessageHeader';
import { MessageList } from '../../components/MessageList';
import { TimeStamp } from '../../components/TimeStamp';
import './MessagesContent.scss';
import { MessageContentPropsType } from './MessagesContentType';

export const MessagesContent: React.FC<MessageContentPropsType> = ({
   currentChannel,
   currentChannelId,
   placeholderName,
   visibleMessageField,
   currentUserId,
}) => {
   const [messageArr, setMessageArr] = useState<MessageModel[]>(messages);
   const [currentMessage, setCurrentMessage] = useState<string>('');

   const [newsMessages, setNewMessage] = useState(messages);
   const timeMessage = newsMessages.map((item) => item.timeStamp);

   let lastElemTime = timeMessage[timeMessage.length - 1];

   let LastEl = messageArr[messageArr.length - 1];

   console.log(messageArr);

   const handleSendButton = (
      text: string,
      currentUserId: number,
      id: number
   ) => {
      let nMess: MessageModel;

      if (lastElemTime >= Date.now() - 300000) {
         let LastEl = messageArr[messageArr.length - 1];
         LastEl.messageText = [
            ...LastEl.messageText,
            {
               timeStamp: Date.now(),
               text: text,
            },
         ];
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
            messageText: [],
         };
         setMessageArr([...messageArr, nMess]);
      }
      setCurrentMessage('');
   };

   const timestamp: number = messages[0] ? messages[0].timeStamp : 0;

   return (
      <div className='wider'>
         <div className='box-2'>
            <MessageHeader
               currentChannel={currentChannel}
               currentChannelId={currentChannelId}
            />
            <div className='message-content'>
               <TimeStamp data={timestamp} />
               <MessageList
                  key='1'
                  currentChannel={currentChannel}
                  messages={messageArr}
                  currentMessage={currentMessage}
                  setNewMessage={setNewMessage}
               />
            </div>
         </div>
         <InputMessage
            placeholderName={placeholderName}
            currentMessage={currentMessage}
            visibleMessageField={visibleMessageField}
            handleSendButton={handleSendButton}
            currentChannelId={currentChannelId}
            currentUserId={currentUserId}
            setCurrentMessage={setCurrentMessage}
         />
      </div>
   );
};
