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
const participantsCount = participantsId ? participantsId.length : 0;
  return(
      <div className="msgs_header">
      <div className="super_wrapper">
    <div className="curr_ch_wrapper">
      <h3 className='current_channel'>#{currentChannel}</h3>
    </div>
          <div className="intermediary">
          </div>

        <div className="people_wrapper">
        <div className="people">
            <div className="people-round">
        <BsPeopleFill onMouseOver={() => setShow(true)} onMouseOut={()=> setShow(false)} />
            <div className="participants_count">{participantsCount}</div>
            </div>
            </div>
        </div>

      </div>
          <Tooltip users={participansArr} show={show} currentChannelId={currentChannelId}/>
      </div>
  )
} 
