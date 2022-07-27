export type InputMassageType = {
    placeholderName?: string
    currentMessage: string
    visibleMessageField: boolean
    handleSendButton: (text: string, currentUserId: number, id: number) => void
    currentChannelId: number
    currentUserId: number
    setCurrentMessage: (value: string | any) => void;
}