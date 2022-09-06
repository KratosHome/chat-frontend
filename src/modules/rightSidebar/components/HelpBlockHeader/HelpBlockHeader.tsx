import { faKeyboard, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { memo, useState } from 'react';
import { HoverIcon } from '../../../UI/HoverIcon';
import { HelpBlockHeaderType } from './HelpBlockHeaderType';
import './HelpBlockHeader.scss';



export const HelpBlockHeader: React.FC<HelpBlockHeaderType> = memo(
   ({onClose}) => {
    const [isHoverKeyboard, setIsHoverKeyboard] = useState(false);
    const [isHoverGift, setIsHoverGift] = useState(false);
    const [isHoverClose, setIsHoverClose] = useState(false)
      return (
            <div className='help-block__header-container'>
               <p className='help-block__header'>Help</p> 
               <div className='help-block__icons'>
                    <div                                
                        className='help-block__icon'                          
                        onMouseOver={() => setIsHoverKeyboard(true)}
                        onMouseOut={() => setIsHoverKeyboard(false)}>
                        <FontAwesomeIcon className='fa-lg' icon={faKeyboard}/>
                    </div>
                    <HoverIcon
                    isHover={isHoverKeyboard}
                    marginArrowLeft={'45px'}
                    marginBlockTop={'85px'}
                    marginBlockLeft={'-50px'}
                     >
                        <div>Keyboard shortcuts</div>
                    </HoverIcon>
                    <div 
                        className='help-block__icon'                       
                        onMouseOver={() => setIsHoverGift(true)}
                        onMouseOut={() => setIsHoverGift(false)}>
                        <FontAwesomeIcon className='fa-lg' icon={faGift}/>
                    </div>
                    <HoverIcon
                        isHover={isHoverGift}
                        marginArrowLeft={'25px'}
                        marginBlockTop={'85px'}
                        marginBlockLeft={'5px'}
                     >
                        <div>What's new</div>
                    </HoverIcon>
                    <div 
                        className='help-block__icon'
                        onMouseOver={() => setIsHoverClose(true)}
                        onMouseOut={() => setIsHoverClose(false)}
                        onClick={onClose}>
                        <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
                            <path 
                                fill="#1d1c1d" 
                                stroke="currentColor"
                                strokeLinecap="round" 
                                strokeWidth="1.5" 
                                d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546">
                            </path>
                        </svg>
                    </div>
                    <HoverIcon
                        isHover={isHoverClose}
                        marginArrowLeft={'15px'}
                        marginBlockTop={'85px'}
                        marginBlockLeft={'50px'}
                     >
                        <div>Close</div>
                    </HoverIcon>
                </div>
            </div>
      );
   },
);
