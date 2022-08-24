import React, { useEffect, useState } from 'react';
import { Header } from '../../../header';
import { MessagesContent } from '../../../messages';
import activeChatService from '../../../../services/activeChat.service';
import { channels } from '../../../../services/channels.service';
import { participants } from '../../../../services/participant.service';
import { useHotkeys } from 'react-hotkeys-hook';
import { SideBar } from '../../../sidebar';
import './Main.scss';
import ChannelState from '../../../../store/channel';
import { observer } from 'mobx-react-lite';

export const Main: React.FC = observer(() => {
   const [visibleMessageField, setVisibleMessageField] = useState(true);

   const [currentChannelId, setCurrentChannelId] = useState<number>(1);
   const [currentUserId, setCurrentUserId] = useState<number>(1); // The rule is the 1st participant should be user, 0st - moderator

   let active = activeChatService.getActiveChatId();
   let channel = channels.find((x) => x.id === active);

   useEffect(() => {
      ChannelState.chanel(channel);
   }, [channel]);

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

   const changeUser = () => {
      let nextUser = currentUserId == 1 ? 0 : 1;
      setCurrentUserId(nextUser);
   };

   useHotkeys('ctrl+k', () =>
      setCurrentUserId((prevCount) => (prevCount === 1 ? 0 : 1)),
   );

   return (
      <div className={topic}>
         <div className='header-wrapper'>
            <Header
               currentUserName={currentUserName}
               chanelName={channel?.name}
            />
         </div>
         <div className='content-wrapper'>
            <div className='content'>
               <SideBar setCurrentChannel={setCurrentChannelId} />
               <MessagesContent
                  currentChannel={activeChatService.getActiveChatName()}
                  currentChannelId={currentChannelId}
                  placeholderName={channel?.name}
                  visibleMessageField={visibleMessageField}
                  currentUserId={currentUserId}
               />
            </div>
         </div>
      </div>
   );
});
