import React from 'react';
import { format } from "date-fns";

interface Data {
	data: number;
}

export const TimeStamp : React.FC<Data> = ({data}) => {

	if(data){
		return (
			<div className='line position-relative'>
				<hr/>
				<div className='time_stamp d-flex flex-1 justify-content-center border border-secondary rounded-pill'>
					{`${format(new Date(data), "do MMMM")}`}
				</div>
			</div>
		)
	}
	
  return (
		<div className='time_stamp d-flex justify-content-center border border-secondary rounded-pill'>
		</div>
  )
}
