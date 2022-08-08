import React, {FC, memo, useState} from 'react';
import "./InputMessage.scss"
import {InputMessageType} from "./InputMessageType";
import Picker from 'emoji-picker-react';
import {InputUpperBlock} from "./InputUpperBlock";
import {InputLowerBlock} from "./InputLowerBlock";
import {messages} from "../../services/message.service";
import activeChatService from "../../services/activeChat.service";

export const InputMessage: FC<InputMessageType> = memo(({
                                                            placeholderName,
                                                            currentMessage,
                                                            visibleMessageField,
                                                            handleSendButton,
                                                            currentChannelId,
                                                            currentUserId,
                                                            setCurrentMessage,
                                                        }) => {

    const [emojiActive, setEmojiActive] = useState<boolean>(false)
    const [focusInput, setFocusInput] = useState<boolean>(false)
    const onEmojiClick = (emojiObject: any) => {
        setCurrentMessage((prevState: string) => prevState + emojiObject.emoji);
    };

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div
            className="inputContainer"
        >
            <div className={emojiActive ? "emojiInputMessage" : "emojiDisabledInputMessage"}>
                <Picker
                    onEmojiClick={onEmojiClick}
                    preload={false}
                />
            </div>
            <InputUpperBlock
                focusInput={focusInput}
            />
            <input
                onFocus={() => {
                    setFocusInput(!focusInput);
                }}
                onBlur={() => {
                    setFocusInput(!focusInput);
                }}

                disabled={visibleMessageField}
                value={currentMessage}
                type="text"
                placeholder={`Massage #${placeholderName}`}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <InputLowerBlock
                currentMessage={currentMessage}
                focusInput={focusInput}
                isHovering={isHovering}
                handleMouseOut={handleMouseOut}
                handleMouseOver={handleMouseOver}
                currentChannelId={currentChannelId}
                currentUserId={currentUserId}
                handleSendButton={handleSendButton}
                visibleMessageField={visibleMessageField}
                setEmojiActive={setEmojiActive}
                emojiActive={emojiActive}
            />
        </div>
    );
});

