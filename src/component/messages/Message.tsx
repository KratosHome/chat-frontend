import React from 'react';
import {format} from "date-fns";

 interface Message {
	partisipant?: string;
	time : number;
	message: string;
	partisipantId?: number;
}

export const Message : React.FC<Message> = ({partisipant, time, message, partisipantId}) => {
	const messageLayout = (partisipantId ===1) ? 'my-message': 'other'
  return(		
		<div className={`message_wrapper`}>
			<div className={`message ${messageLayout}`}>
			    <div className={`participant_wrapper`}>
				<p className='participant_indicator'>{`${partisipant} `}</p>
				<p className='date_indicator'>{`${format(new Date(time), "HH:mma")}`}</p>
			    </div>
			</div>
			<p className={`message ${messageLayout}`}>{message}</p>
		</div>
	)  
}
