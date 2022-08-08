import MessageModel from "../../dto/MessageModel";

export type MessageListType = {
    messages: MessageModel[],
    currentChannel: string;
    currentMessage: string;
    setNewMassaeg: any
}