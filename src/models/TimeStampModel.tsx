export default class TimeStampModel {
    public chatChannelId: number;
    public time: number;

    constructor(chatChannelId: number, time: number) {
        this.chatChannelId = chatChannelId;
        this.time = time;    
    }
}