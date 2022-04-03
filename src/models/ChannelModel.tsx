import MessageModel from "./MessageModel";
import ParticipantModel from "./PartiticiantModel";
import TimeStampModel from "./TimeStampModel";

export default class ChannelModel {
    public id: number;
    public name: string;
    public messages: MessageModel[] = [];
    public participants: ParticipantModel[];
    public userTimeStamp: TimeStampModel;
    public undreadMessagesCount: number = 0;


    constructor(id: number, name: string, messages: MessageModel[], participants: ParticipantModel[], userTimeStamp: TimeStampModel) {
        this.name = name;
        this.id = id;    
        this.messages = messages;
        this.participants = participants;
        this.userTimeStamp = userTimeStamp;

        this.estimateUndreadMessagesCount()
    }

    public estimateUndreadMessagesCount() {
        let count: number = 0;

        if(this.messages.length > 0) {  
            this.messages.forEach((message: MessageModel) => {
              if(message.timeStamp > this.userTimeStamp.time) {
                ++count;
              }
            })
        }

        this.undreadMessagesCount = count;

        return count;
    }

    public addNewMessage(message: MessageModel) {
        this.messages.push(message);
    }

    public addOldMessage(message: MessageModel) {
        this.messages.unshift(message);
    }

    public addOldMessages(oldMessages: MessageModel[]) {
        let newArray: MessageModel[] = [];

        oldMessages.forEach(message => newArray.push(message));
        this.messages.forEach(message => newArray.push(message));
        this.messages = newArray;
    }

    public replaceMessageWith(message: MessageModel) {
        for(let i = 0; i < this.messages.length; ++i) {
            if(this.messages[i].id == message.id) {
                this.messages[i].text = message.text;
                this.messages[i].isEdited = message.isEdited;
                break;
            }
        }
    }
}