import React, {FC, memo, useState} from 'react';
import {HoverButton} from "../HoverButton";
import {InputButtonType} from "./InputButtonType";

export const InputButton: FC<InputButtonType> = memo(({children, focusInput, buttonText}) => {
    const [isHover, setIsHover] = useState(false);
    const handleMouseOver = () => {
        setIsHover(true);
    };

    const handleMouseOut = () => {
        setIsHover(false);
    };
    return (
        <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <HoverButton isHover={isHover} focusInput={focusInput} >
                <div>
                    {buttonText}
                </div>
            </HoverButton>
            {children}
        </button>
    );
});
