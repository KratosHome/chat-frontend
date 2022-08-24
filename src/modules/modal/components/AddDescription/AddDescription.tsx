import React, {useState, FC} from 'react';
import "./AddDescription.scss"
import {AddDescriptionType} from "./AddDescriptionType";


export const AddDescription: FC<AddDescriptionType> = ({
                                                           setIsModalOpenDescription,
                                                           descriptionChannel,
                                                           setDescriptionChannel
                                                       }) => {
    const [focusInput, setFocusInput] = useState<boolean>(false)
    const [value, setValue] = useState<string>(descriptionChannel)

    const changeText = (e: any) => {
        setValue(e.target.value)
    }
    const SaveText = () => {
        setIsModalOpenDescription(false)
        setDescriptionChannel(value)
    }

    return (
        <div className="container-menu widthAddDescription">
            <div className="containerAddDescription">
                <div className="headerAddDescription">
                    <h1
                        style={{
                            textShadow: focusInput ? "0px 0px 1px rgba(0,0,0,0.5)" : ""
                        }}
                    >Edit description</h1>
                    <button onClick={() => setIsModalOpenDescription(false)}>
                        <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"
                                  d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"></path>
                        </svg>
                    </button>
                </div>
                <textarea
                    onFocus={() => {
                        setFocusInput(!focusInput);
                    }}
                    onBlur={() => {
                        setFocusInput(!focusInput);
                    }}
                    onChange={(e) => changeText(e)}
                    value={value}
                />
                <div className="textAddDescription"
                     style={{
                         textShadow: focusInput ? "0px 0px 1px rgba(0,0,0,0.1)" : ""
                     }}
                >Let people know what this channel is for.
                </div>
                <div className="buttonAddDescription">
                    <button onClick={() => setIsModalOpenDescription(false)}>Cancel</button>
                    <button onClick={() => SaveText()}>Save</button>
                </div>
            </div>
        </div>
    );
};