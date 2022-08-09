export default class ChannelDto {
   public id: number;
   public name: string;
   public projectName: string;
   public isInternal: boolean;
   public externalSubChatName: string;
   public areParticipantsVisible: boolean;

   constructor(
      id: number,
      name: string,
      projectName: string,
      isInternal: boolean,
      externalSubChatName: string,
      areParticipantsVisible: boolean
   ) {
      this.id = id;
      this.name = name;
      this.projectName = projectName;
      this.isInternal = isInternal;
      this.externalSubChatName = externalSubChatName;
      this.areParticipantsVisible = areParticipantsVisible;
   }
}
