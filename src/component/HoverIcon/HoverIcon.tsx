import React, {FC, useState} from 'react';
import "./HoverIcon.scss"
import {HoverIconType} from "./HoverIconType";


export const HoverIcon: FC<HoverIconType> = ({
                                                 children,
                                                 isHover,
                                                 marginLeft,
                                                 marginTop,
                                                 marginRight
                                             }) => {
    return (
        <div
            className={isHover ? "containerHoverIcon visibleHoverIcon" : "containerHoverIcon disableHoverIcon"}
            style={{
                marginTop: `${marginTop}`,
                marginRight: `${marginRight}`,
            }}
        >
            <div
                className="TopArrowHoverIcon"
                style={{marginLeft: `${marginLeft}`}}
            />
            <>
                {children}
            </>
        </div>
    );
};
