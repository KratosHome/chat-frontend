export default class UserTypingDto {
   public userID: number;
   public chatParticipantId: number;
   public chatChannelID: number;

   constructor(
      userID: number,
      chatParticipantId: number,
      chatChannelID: number
   ) {
      this.userID = userID;
      this.chatChannelID = chatChannelID;
      this.chatParticipantId = chatParticipantId;
   }
}
