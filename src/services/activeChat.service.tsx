import { channels } from './channels.service';
import { messages } from './message.service';

var activeChatId: number = 1;

const activeChatService = {
   isThisChatActive: function (chatChannelId: number) {
      return chatChannelId != 0 ? chatChannelId == activeChatId : false;
   },

   setActiveChat: function (chatChannelId: number) {
      if (chatChannelId != 0) {
         activeChatId = chatChannelId;
      }
      messages
         .filter((x) => x.chatChannelId == activeChatId)
         .forEach((x) => {
            x.isRead = true;
            messages[messages.findIndex((m) => m.id == x.id)] = x;
         });
   },

   getActiveChatId: function () {
      return activeChatId;
   },

   getActiveChatName: function () {
      let channel = channels.find((x) => x.id === activeChatId);
      return channel ? channel.name : '';
   },
};

export default activeChatService;
