import React from 'react';
import { channels } from '../../../../services/channels.service';
import { messages } from '../../../../services/message.service';
import './MessageWarning.scss';
import { ChannelProps } from './MessageWarningType';

export const MessageWarning: React.FC<ChannelProps> = ({
   projectName,
   channelName,
   isCollapsed,
   channelId,
}) => {
   var qty: number = isCollapsed || channelId != 0 ? getNumberOfUnread() : 0;
   let fullCount: JSX.Element = (
      <div className='warning-round'>
         <span>{qty}</span>
      </div>
   );

   let messageCount: JSX.Element = qty != 0 ? fullCount : <div></div>;

   function getNumberOfUnread() {
      if (!isCollapsed) {
         const count: number = messages
            .filter((x) => !x.isRead && x.chatChannelId == channelId)
            .reduce((counter, obj) => counter + 1, 0);
         return count;
      }
      return messages
         .filter((x) => !x.isRead && getChannels().includes(x.chatChannelId))
         .reduce((counter, obj) => counter + 1, 0);
   }

   function getChannels(): number[] {
      if (projectName == channelName) {
         return channels
            .filter((x) => x.projectName == projectName)
            .map((x) => x.id);
      }
      return channels
         .filter(
            (x) =>
               x.projectName == projectName &&
               x.externalSubChatName == channelName
         )
         .map((x) => x.id);
   }

   return <span>{messageCount}</span>;
};
