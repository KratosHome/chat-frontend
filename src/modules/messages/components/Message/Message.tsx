import React, { useState } from 'react';
import { format } from 'date-fns';
import { MessageType } from './MessageType';
import './Message.scss';
import { HoverIcon } from '../../../common/HoverIcon';

export const Message: React.FC<MessageType> = ({
   participant,
   time,
   message,
   participantId,
   messageTime,
}) => {
   const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
   ];

   const [isHoverTime, setIsHoverTime] = useState<boolean>(false);

   const messageLayout = participantId === 1 ? 'my-message' : 'other';

   return (
      <>
         <div className={`message-wrapper ${messageLayout}`}>
            <img
               src='https://ca.slack-edge.com/T03RPA22YCQ-U03QWJY04MB-gf1efec52742-32'
               alt='user'
               className='avatar-message'
            />
            <div className='message-container'>
               <div className='message-info'>
                  <span className='participant-indicator'>{participant}</span>
                  <div
                     className='date-indicator'
                     onMouseOver={() => setIsHoverTime(true)}
                     onMouseOut={() => setIsHoverTime(false)}
                  >
                     {`${format(new Date(time), 'H:mm a')}`}
                     <HoverIcon
                        isHover={isHoverTime}
                        marginButtonArrowLeft={'50px'}
                        marginBlockTop={'-58px'}
                        marginBlockLeft={'-50px'}
                     >
                        <div>{`${months[new Date(time).getMonth()]} ${new Date(
                           time,
                        ).getDay()}th at ${format(
                           new Date(time),
                           'H:mm:ss a',
                        )}`}</div>
                     </HoverIcon>
                  </div>
               </div>
               <div>
                  <p className={`message ${messageLayout}`}>{message}</p>
               </div>
               {messageTime.map((item: any) => (
                  <div className='container-mini-message'>
                     <div>{`${format(new Date(item.timeStamp), 'H:mm')}`}</div>
                     <div>{item.text}</div>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
};
