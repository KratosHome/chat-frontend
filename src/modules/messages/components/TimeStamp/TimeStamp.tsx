import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';
import './TimeStamp.scss';
import {DateButton, ReactModal} from "../../../modal";
import {DataType} from "./DataType";


export const TimeStamp: React.FC<DataType> = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [topCoords, setTopCoords] = useState<number>(0);

    const onClickModalOpen = (e: any) => {
        setIsModalOpen(!isModalOpen)
        let rect = e.target.getBoundingClientRect();
        let y = e.clientY - rect.top;
        setTopCoords(e.clientY - y + 30)
    }

    const onSvgClock = (e: any) => {
        setIsModalOpen(!isModalOpen)
        e.stopPropagation()
    }

    if (data) {
        return (
            <>
                <div
                    className='containerTimeStamp'
                >
                    <div className='containerTime'
                         onClick={onClickModalOpen}
                    >
                        <div>
                            {`${format(new Date(data), 'MMMM do')}`}
                            <svg
                                onClick={onSvgClock}
                                data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
                                <path
                                    fill='none'
                                    stroke='currentColor'
                                    stroke-linecap='round'
                                    stroke-linejoin='round'
                                    stroke-width='1.5'
                                    d='M13.75 8 10 11.75 6.25 8'
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <ReactModal
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(!isModalOpen)}
                    modalPosition={"date-button-position"}
                >
                    <div style={
                        {
                            top: `${topCoords}px`,
                            position: "absolute"
                        }
                    }>
                        <DateButton/>
                    </div>
                </ReactModal>
            </>
        );
    }

    return null;
};
