import React from 'react';
import {format} from "date-fns";

 interface Message {
	partisipant?: string;
	time : number;
	message: string;
	partisipantId?: number;
}

export const Message : React.FC<Message> = ({partisipant, time, message, partisipantId}) => {
	const messageLayout = (partisipantId ===1) ? 'justify-content-end': 'justify-content-start'
  return(		
		<div className={`message d-flex flex-column`}>
			<div className={`d-flex ${messageLayout}`}>
				<h5>{`${partisipant} `}</h5>
				<h5 className='ms-3'>{`${format(new Date(time), "HH:mma")}`}</h5>
			</div>
			<p className={`d-flex ${messageLayout}`}>{message}</p>
		</div>
	)  
}
