import React, {useState} from 'react';
import {format} from 'date-fns';
import './TimeStamp.scss';
import {DateButton, HistoryMenu, ReactModal} from "../../../modal";

interface Data {
    data: number;
}

export const TimeStamp: React.FC<Data> = ({data}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    if (data) {
        return (
            <div className="test">
                <div className='containerTimeStamp'>
                    <div className='containerTime'
                         onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                        <div>
                            {`${format(new Date(data), 'MMMM do')}`}
                            <svg data-0v2='true' aria-hidden='true' viewBox='0 0 20 20'>
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
                    <DateButton/>
                </ReactModal>
            </div>
        );
    }

    return null;
};
