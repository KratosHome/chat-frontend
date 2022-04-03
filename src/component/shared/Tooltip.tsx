import React from "react";

interface iTooltipProps {
  users: string[],
	show:boolean,
	currentChannelId:number,
}

export const Tooltip : React.FC<iTooltipProps> = ({users, show, currentChannelId}) => {
	const showTooltip = show ? 'visible' : 'unvisible'
	if(currentChannelId === 1){
		users = []
	}
	
	const usersList = users.map(el => {
		return <li>{el}</li>
	})
  return (
    <>
      <div className={`toltip-list ${showTooltip}`}>
				<ul>
					{usersList}
				</ul>
      </div>
    </>
  )
}