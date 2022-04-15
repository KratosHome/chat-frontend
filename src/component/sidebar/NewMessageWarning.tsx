import React, {useState} from 'react';
import { channels } from '../../services/channels.service';
import { messages } from '../../services/message.service';

type ChannelProps = {projectName: string, channelName:string, isCollapsed: boolean, channelId:number};

export const NewMessageWarning: React.FC <ChannelProps> = ({projectName, channelName, isCollapsed, channelId}) => {

    var qty: number = isCollapsed || channelId != 0 ? getNumberOfUnread() : 0;

    let messageCount:JSX.Element = qty !=0 ?   <span><small className='right'> {qty}</small> </span> : <span></span>

    function getNumberOfUnread() {
        if (!isCollapsed) {
          const count:number = messages.filter(x=>!x.isRead && x.chatChannelId == channelId).reduce((counter, obj) => counter + 1, 0);
          return count;
        }
        return messages.filter(x=>!x.isRead && getChannels().includes(x.chatChannelId)).reduce((counter, obj) => counter + 1, 0);
    }

    function getChannels(): number[] {
        if (projectName == channelName) {
          return channels.filter(x=>x.projectName == projectName).map(x=>x.id);
        }
        return channels.filter(x=>x.projectName == projectName && x.externalSubchatName == channelName).map(x=>x.id);
    }

return (
    <span className="message_count">
        {messageCount}
    </span>
)
}
