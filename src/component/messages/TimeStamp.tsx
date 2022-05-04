import React from 'react';
import { format } from "date-fns";

interface Data {
	data: number;
}

export const TimeStamp : React.FC<Data> = ({data}) => {

	if(data){
		return (
			<div className='timestamp_wrapper'>
				<div className='time_stamp_round'>
				<div className='time_stamp'>
					{`${format(new Date(data), "do MMMM")}`}
				</div>
				</div>
			</div>
		)
	}
	
  return (
		<div className='time_stamp d-flex justify-content-center border border-secondary rounded-pill'>
		</div>
  )
}
