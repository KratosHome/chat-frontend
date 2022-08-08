import React from 'react';
import {format} from "date-fns";
import {MessageType} from "./MessageType";


export const Message: React.FC<MessageType> = ({partisipant, time, message, partisipantId, messageTime}) => {
    const messageLayout = (partisipantId === 1) ? 'my-message' : 'other'
    return (
        <>
            <div className={`message_wrapper ${messageLayout}`}>
                <img
                    src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-32'
                    alt='user'
                    className="avatarMessage"
                />
                <div className="Message">
                    <div>
                        <span className='participant_indicator'>{partisipant}</span>
                        <span className='date_indicator'>{`${format(new Date(time), "HH:mm a")}`}</span>
                    </div>
                    <div><p className={`message ${messageLayout}`}>{message}</p></div>
                    {messageTime.map((item: any) =>
                        <div className="containerMiniMess">
                            <div>{`${format(new Date(item.timeStamp), "HH:mm")}`}</div>
                            <div>{item.text}</div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}
