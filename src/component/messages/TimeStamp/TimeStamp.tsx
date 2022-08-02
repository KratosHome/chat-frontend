import React from 'react';
import {format} from "date-fns";
import "./TimeStamp.scss"

interface Data {
    data: number;
}

export const TimeStamp: React.FC<Data> = ({data}) => {

    if (data) {
        return (
            <>
                <div className="test"></div>
            <div className='containerTimeStamp'>
                <div>
                    {`${format(new Date(data), "MMMM do")}`}
                    <svg data-0v2="true" aria-hidden="true" viewBox="0 0 20 20" className="">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                              stroke-width="1.5" d="M13.75 8 10 11.75 6.25 8"></path>
                    </svg>
                </div>
            </div>
            </>
        )
    }

    return null
}
