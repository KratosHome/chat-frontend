export default class ChannelDto {
    public id: number;
    public name: string;
    public projectName: string;
    public isInternal: boolean;
    public externalSubchatName: string;
    public areParticipantsVisible:boolean;

    constructor(id: number, name: string, projectName: string, isInternal: boolean, externalSubchatName: string, 
        areParticipantsVisible:boolean) {
        this.id = id; 
        this.name = name;
        this.projectName = projectName;
        this.isInternal = isInternal;
        this.externalSubchatName = externalSubchatName;
        this.areParticipantsVisible = areParticipantsVisible;
    }
}