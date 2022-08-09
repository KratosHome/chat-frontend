export default class MessageModel {
   public id: number;
   public chatParticipantId: number;
   public text: string;
   public messageText?: any;
   public timeStamp: number;
   public isEdited: boolean;
   public isRead: boolean; // by User
   public chatChannelId: number;
   public isUnderReview: boolean;
   public sentTimeStamp: number;
   public rejectedTimeStamp: number;

   constructor(
      id: number,
      participantId: number,
      text: string,
      timeStamp: number,
      isEdited: boolean,
      isRead: boolean,
      chatChannelId: number,
      isUnderReview: boolean,
      sentTimeStamp: number,
      rejectedTimeStamp: number
   ) {
      this.id = id;
      this.chatParticipantId = participantId;
      this.text = text;
      this.timeStamp = timeStamp;
      this.isEdited = isEdited;
      this.isRead = isRead;
      this.chatChannelId = chatChannelId;
      this.isUnderReview = isUnderReview;
      this.sentTimeStamp = sentTimeStamp;
      this.rejectedTimeStamp = rejectedTimeStamp;
   }
}

export class dateService {
   static getDate(messageModel: MessageModel) {
      return new Date(messageModel.timeStamp);
   }

   static getLocaleTime(messageModel: MessageModel) {
      const hours = String(this.getDate(messageModel).getHours()).padStart(
         2,
         '0'
      );
      const minutes = String(this.getDate(messageModel).getMinutes()).padStart(
         2,
         '0'
      );

      return `${hours}:${minutes}`;
   }
}
