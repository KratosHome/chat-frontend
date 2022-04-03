import React, { useState } from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { channelParticipants } from '../../services/channelParticipants.service'
import { participants } from '../../services/participant.service'
import { Tooltip } from '../shared/Tooltip'

interface iMessageHeaderProps {
    currentChannel:string,
    currentChannelId: number,
}
export const MessageHeader: React.FC<iMessageHeaderProps> = ({currentChannel, currentChannelId}) => {
const participansArr: any = []
const [show, setShow] = useState(false)
const channelParticipantsId = channelParticipants.find(el => el.channelId === currentChannelId)
const participantsId = channelParticipantsId?.participantsId
participantsId?.map(el => {
    participansArr?.push(participants?.find(e => e.id === el)?.name);
})

  return(
    <div className='d-flex justify-content-between align-items-center'>
      <h3>#{currentChannel}</h3>
      <div>
        <BsPeopleFill onMouseOver={() => setShow(true)} onMouseOut={()=> setShow(false)} />
        <Tooltip users={participansArr} show={show} currentChannelId={currentChannelId}/>
      </div>
    </div>
  )
} 