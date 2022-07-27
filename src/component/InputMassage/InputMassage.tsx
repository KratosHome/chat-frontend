import React, {FC, memo, useState} from 'react';
import "./InputMassage.scss"
import {InputMassageType} from "./InputMassageType";
import Picker from 'emoji-picker-react';
import {InputUpperBlock} from "./InputUpperBlock";
import {InputLowerBlock} from "./LowerBlock";

export const InputMassage: FC<InputMassageType> = memo(({
                                                            placeholderName,
                                                            currentMessage,
                                                            visibleMessageField,
                                                            handleSendButton,
                                                            currentChannelId,
                                                            currentUserId,
                                                            setCurrentMessage,
                                                        }) => {

    const [emojiActib, setEmojiActib] = useState<boolean>(false)
    const [focusInput, setFocusInput] = useState<boolean>(false)
    const onEmojiClick = (event: any, emojiObject: any) => {
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
            <div className={emojiActib ? "emojiInputMasseg" : "emojiDisabletInputMasseg"}>
                <Picker
                    onEmojiClick={onEmojiClick}
                    preload={false}
                />
            </div>
            <InputUpperBlock
                focusInput={focusInput}
            />
            <input
                onFocus={(e) => {
                    setFocusInput(!focusInput);
                }}
                onBlur={(e) => {
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
                setEmojiActib={setEmojiActib}
                emojiActib={emojiActib}
            />
        </div>
    );
});

