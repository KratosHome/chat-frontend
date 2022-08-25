import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {MessageType} from './MessageType';
import './Message.scss';
import {HoverModal} from "../../../UI/HoverModal";
import {NameModal} from "./component/NameModal/NameModal/NameModal";

export const Message: React.FC<MessageType> = ({
                                                   participant,
                                                   time,
                                                   message,
                                                   participantId,
                                                   messageTime,
                                               }) => {
    const messageLayout = participantId === 1 ? 'my-message' : 'other';
    const [topCoords, setTopCoords] = useState<number>(0);
    const [leftCoords, setLeftCoords] = useState<number>(0);
    const [timerName, setTimerName] = useState<boolean | null>(null);
    const [isModalName, setIsModalName] = useState<boolean>(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {

        setTimerName(true)
        let rect = (e.target as Element).getBoundingClientRect();
        if (messageLayout === "my-message") {
            setTopCoords(rect.top - 230);
            setLeftCoords(rect.left + -90)
        } else {
            setTopCoords(rect.top - 230);
            setLeftCoords(rect.left + -0)
        }

    };


    useEffect(() => {
        let timerIn: any
        if (timerName === false) {
            timerIn = setTimeout(() => {
                setIsModalName(false)
            }, 400);
        } else if (timerName === true) {
            timerIn = setTimeout(() => {
                setIsModalName(true)
            }, 400);
        }
        return () => clearTimeout(timerIn);
    }, [timerName]);
    return (
        <>
            <div className={`message-wrapper ${messageLayout}`}>
                <img
                    onMouseOver={handleClick}
                    onMouseOut={() => setTimerName(false)}
                    src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-32'
                    alt='user'
                    className='avatar-message'
                />
                <div className='message-container'>
                    <div>
                        <span
                            onMouseOver={handleClick}
                            onMouseOut={() => setTimerName(false)}
                            className='participant-indicator'>{participant}</span>
                        <span className='date-indicator'>{`${format(
                            new Date(time),
                            'HH:mm a'
                        )}`}</span>
                    </div>
                    <div>
                        <p className={`message ${messageLayout}`}>{message}</p>
                    </div>
                    {messageTime.map((item: any) => (
                        <div className='container-mini-message'>
                            <div>{`${format(new Date(item.timeStamp), 'HH:mm')}`}</div>
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>
            <HoverModal
                isModalOpen={isModalName}
                timerOut={() => setTimerName(false)}
                timerOver={() => setTimerName(true)}
                topCoords={topCoords}
                leftCoords={leftCoords}
            >
                <NameModal
                    participant={participant}
                    time={time}
                />
            </HoverModal>
        </>
    );
};
