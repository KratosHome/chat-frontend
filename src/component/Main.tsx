import React, {useEffect, useState} from 'react';
import {Header} from "./Header";
import { MessageList } from './messages/MessageList';
import { SideBar } from './sidebar/SideBar';
import  { messages }  from '../services/message.service';
import MessageModel from '../dto/MessageModel';
import activeChatService from '../services/activeChat.service';
import { channels } from '../services/channels.service';
import { participants } from '../services/participant.service';

export const Main: React.FC = () => {
  const [messageArr, setMessageArr] = useState<MessageModel[]>(messages);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [visibleMessageField, setVisibleMessageField] = useState(true)
  const [currentChannelId, setCurrentChannelId] = useState<number>(1)
  const [currentUserId, setCurrentUserId] = useState<number>(1) // The rule is the 1st participant should be user, 0st - moderator
  let active = activeChatService.getActiveChatId();
  let channel = channels.find(x=>x.id === active);
  let isInternal = channel? channel.isInternal : true;
  const type = isInternal ? "internal-chat" : "external-chat";
  const topic = currentUserId == 1 ? type : "moderator";
  const currentUserName = participants[currentUserId].name;

  useEffect(() => {
    const activeChat = activeChatService.getActiveChatId()
    
    if(activeChat !== 1){
      setVisibleMessageField(false)
    }
    if(activeChat === 1){
      setVisibleMessageField(true)
    }
    setCurrentChannelId(activeChat)
  },[currentChannelId])

  const handleSendButton = (text:string, currentUserId:number, id:number) => {
    const nMess: MessageModel = {
      id:messageArr[messageArr.length-1].id +1,
      chatParticipantId: currentUserId,
      text: text,
      timeStamp: Date.now(),
      isEdited: false,
      isRead : false,
      chatChannelId:id,
      isUnderReview: false,
      sentTimeStamp: Date.now(),
      rejectedTimeStamp:Date.now(),
    }

    setMessageArr([...messageArr, nMess])
    setCurrentMessage('')
    }

    const changeUser = () => {
      let nextUser = currentUserId == 1 ? 0 : 1;
      setCurrentUserId(nextUser); 
    }

  return (
    <div className={"d-flex flex-column main-content " + topic}>
      <Header />
      <div className="container-fluid flex-grow-1 d-flex">
        <div className="row flex-fill flex-column flex-sm-row">
          <SideBar setCurrentChannel={setCurrentChannelId} />
          <div className="col-sm-10 col-sm-offset-2 col-md-10 py-2 col-md-offset-2 flex-grow-1 d-flex flex-column px-0 main-content">
            <div className=" flex-grow-1 d-flex flex-column px-0 px-4">
              <MessageList key='1' currentChannel={activeChatService.getActiveChatName()} messages={messageArr} 
              currentChannelId={activeChatService.getActiveChatId()}/>
            {/* Temporary */}
            </div>
            <button onClick={()=>changeUser()} className="btn btn-outline-secondary btn-sm">TEMPORARY: Change {currentUserName}</button>
            <div className="d-flex px-3">
              <div className="flex-grow-1 me-2" >
                <textarea className="form-control" 
                          placeholder="Message..."
                          disabled={visibleMessageField}
                          value={currentMessage}
                          onChange={e=>setCurrentMessage(e.target.value)}
                          />
              </div>
              <div>
                <button type="button" onClick={()=>handleSendButton(currentMessage, currentUserId, currentChannelId)} className="btn btn-primary">Send</button>
              </div> 
             </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
