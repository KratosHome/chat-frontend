import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import {MessageType} from './MessageType';
import './Message.scss';
import {HoverModal} from "../../../UI/HoverModal";

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
    const [isModalName, setIsModalName] = useState<boolean>(false);

    const handlNameClick = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsModalName(!isModalName);
        let rect = (e.target as Element).getBoundingClientRect();
        setTopCoords(rect.top - 10);
        setLeftCoords(rect.left + 20)
    };

    const out = (e: React.MouseEvent<HTMLDivElement>) => {
    }


    useEffect(() => {
        const timerIn = setTimeout(() => {
            console.log("b")
        }, 1000);


        return () => clearTimeout(timerIn);
    }, []);


    // onMouseOver={() => setIsModalName(!isModalName)}
    //   onMouseOut={() => setIsModalName(!isModalName)}


    return (
        <>
            <div className={`message-wrapper ${messageLayout}`}>
                <img
                    src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-32'
                    alt='user'
                    className='avatar-message'
                />
                <div className='message-container'>
                    <div>
                        <span className='participant-indicator'>{participant}</span>
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
            <HoverModal>
                vfvdf
            </HoverModal>
        </>
    );
};
