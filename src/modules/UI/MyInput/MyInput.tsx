import React, {FC, memo} from 'react';
import "./MyInput.scss"
import {MyInputType} from "./MyInputType";

export const MyInput: FC<MyInputType> = memo(({placeholder, svgImg = {}}) => {
    return (
        <>
            <input
                type="text"
                className="MyInput"
                placeholder={placeholder}
                style={{
                    paddingLeft: Object.keys(svgImg).length >= 1 ? "40px" : ""
                }}
            />
            {
                Object.keys(svgImg).length
                    ?
                    <div className="svgMyInput">{svgImg}</div>
                    :
                    null
            }

        </>
    );
});
