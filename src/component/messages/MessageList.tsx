import React, { useState } from 'react';
import { messages } from '../../services/message.service';
import {participants} from '../../services/participant.service'
import MessageModel from '../../dto/MessageModel';
import { Message } from './Message';
import { TimeStamp } from './TimeStamp/TimeStamp';
import activeChatService from '../../services/activeChat.service';
import { MessageHeader } from './MessageHeader';

interface MessageListProps {
	messages: MessageModel[],
	currentChannelId:number,
	currentChannel:string;
}

export const MessageList: React.FC<MessageListProps> = ({messages, currentChannel, currentChannelId}) => {
	const [currentTimeStamp, setCurrentTimeStamp] = useState<number>(0)
	
	const newsMessages = messages.filter(el => el.chatChannelId === activeChatService.getActiveChatId())
	// if(newsMessages[0])setCurrentTimeStamp(`${new Date(newsMessages[0].timeStamp).getDay().toString()}   ${new Date(newsMessages[0].timeStamp).getFullYear().toString()}`)
	const mess = newsMessages.map(e => {	
		const patisipant = participants.find(elem => elem.id ===e.chatParticipantId)
		// if(newsMessages[0].timeStamp) {
		// 	setCurrentTimeStamp(newsMessages[0].timeStamp)
		// }
		// if(newsMessages[0].timeStamp || e.timeStamp > currentTimeStamp ){
		// 	return (
		// 		<div className='position-relative'>
		// 		<TimeStamp data={e.timeStamp} />
		// 		<Message key={e.id+1} partisipantId={patisipant?.id} partisipant={patisipant?.name} time={e.timeStamp} message={e.text} />
		// 		</div>
		// 	)	
		// }
		return (
			<div className='message_list'>
			<Message key={e.id+1} partisipantId={patisipant?.id} partisipant={patisipant?.name} time={e.timeStamp} message={e.text} />
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
