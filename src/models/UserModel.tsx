export default class UserModel {
    public id: number;
    public name: string;
    public chatParticipantId: number;
    public status: string;

    constructor(id: number, name: string, participantId: number, status: string) {
        this.name = name;
        this.id = id;  
        this.chatParticipantId = participantId;  
        this.status = status;
    }
}