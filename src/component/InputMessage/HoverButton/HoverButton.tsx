import React, {FC, memo} from 'react';
import "./HoverButton.scss"
import {HoverButtonType} from "./HoverButtonType";

export const HoverButton: FC<HoverButtonType> = memo(({children, isHover, focusInput}) => {
    return (
        <div
            className={isHover && focusInput ? "containerActiveHoverButton" : "containerDizHoverButton"}>
            {children}
        </div>
    );
});
