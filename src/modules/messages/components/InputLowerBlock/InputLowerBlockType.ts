export type InputLowerBlockType = {
   handleSendButton: (text: string, currentUserId: number, id: number) => void;
   visibleMessageField: boolean;
   emojiActive: boolean;
   setEmojiActive: (fiber?: any, queue?: any, action?: any) => void;
   currentUserId: number;
   currentChannelId: number;
   handleMouseOver: () => void;
   handleMouseOut: () => void;
   isHovering: boolean;
   focusInput: boolean;
   currentMessage: string;
};
