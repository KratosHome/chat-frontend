export default class ChannelParticipantsDto {
   public channelId: number;
   public participantsId: number[];

   constructor(channelId: number, participantsId: number[]) {
      (this.channelId = channelId), (this.participantsId = participantsId);
   }
}
