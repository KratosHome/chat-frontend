export default class MessageModel {

    public id: number;
    public chatParticipantId: number;
    public chatParticipantName: string;
    public text: string;
    public timeStamp: number;
    public isEdited: boolean;
    public chatChannelId: number;

    constructor(id: number, participantId: number, participantName: string, text: string, timeStamp: number, isEdited: boolean, chatChannelId: number) {
        this.id = id; 
        this.chatParticipantId = participantId;
        this.chatParticipantName = participantName;   
        this.text = text;
        this.timeStamp = timeStamp;
        this.isEdited = isEdited;
        this.chatChannelId = chatChannelId;
    }

    getDate() {
        return new Date(this.timeStamp)
    }

    getLocaleTime() {
        const hours = String(this.getDate().getHours()).padStart(2, "0");
        const minutes = String(this.getDate().getMinutes()).padStart(2, "0");

        return `${hours}:${minutes}`;
    }
}