export default class MessageCommentModel {
   public id: number;
   public messageId: number;
   public chatParticipantId: number;
   public text: string;
   public timeStamp: number;

   constructor(
      id: number,
      messageId: number,
      participantId: number,
      text: string,
      timeStamp: number
   ) {
      this.id = id;
      this.messageId = messageId;
      this.chatParticipantId = participantId;
      this.text = text;
      this.timeStamp = timeStamp;
   }
}
