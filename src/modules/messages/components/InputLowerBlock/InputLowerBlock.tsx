import React, {FC, memo, useState} from 'react';
import './InputLowerBlock.scss';
import {InputLowerBlockType} from './InputLowerBlockType';
import {HoverIcon} from "../../../common/HoverIcon";

export const InputLowerBlock: FC<InputLowerBlockType> = memo(
    ({
         isHovering,
         currentMessage,
         handleMouseOut,
         handleMouseOver,
         currentChannelId,
         currentUserId,
         handleSendButton,
         visibleMessageField,
         setEmojiActive,
         emojiActive,
     }) => {

        const [isHoverAttachments, setIsHoverAttachments] = useState<boolean>(false);
        const [isHoverVide, setIsHoverVideo] = useState<boolean>(false);
        const [isHoverAudio, setIsHoverAudio] = useState<boolean>(false);
        const [isHoverEmoji, setIsHoverEmoji] = useState<boolean>(false);
        const [isHoverMentionSomeone, setIsHoverMentionSomeone] = useState<boolean>(false);
        const [isHoverHideFormatting, setIsHoverHideFormatting] = useState<boolean>(false);
        const [isHoverSendMessage, setIsHoverSendMessage] = useState<boolean>(false);
        const [isHoverscheduleForLater, setIsHoverscheduleForLater] = useState<boolean>(false);

        return (
            <div className='containerLowerBlock'>
                <div className='containerLeftLowerBlock '>
                    <button
                        onMouseOver={() => setIsHoverAttachments(!isHoverAttachments)}
                        onMouseOut={() => setIsHoverAttachments(!isHoverAttachments)}
                    >
                        <svg data-ufvi='true' viewBox='0 0 20 20'>
                            <path
                                fill='none'
                                stroke='currentColor'
                                stroke-linecap='round'
                                stroke-width='1.5'
                                d='M10 3.25v13.5M16.75 10H3.25'
                            ></path>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverAttachments}
                        marginBlockTop={'-85px'}
                        marginBlockLeft={'0px'}
                        marginButtonArrowLeft={"0px"}
                    >
                        <div className='hoverAttachmentsInputLowerBlock'>
                            <div>Attachments & shortcuts</div>
                            <div>Tip: double click to upload</div>
                        </div>
                    </HoverIcon>
                    <button
                        onMouseOver={() => setIsHoverVideo(!isHoverVide)}
                        onMouseOut={() => setIsHoverVideo(!isHoverVide)}
                    >
                        <svg data-ufvi='true' viewBox='0 0 20 20'>
                            <path
                                fill='none'
                                stroke='currentColor'
                                stroke-linejoin='round'
                                stroke-width='1.5'
                                d='M3.25 3.75a1.5 1.5 0 0 0-1.5 1.5v9.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.59l3.75 2.159a.5.5 0 0 0 .75-.434v-7.77a.5.5 0 0 0-.75-.433L13.75 7.84V5.25a1.5 1.5 0 0 0-1.5-1.5h-9Z'
                            ></path>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverVide}
                        marginBlockTop={'-120px'}
                        marginBlockLeft={'-20px'}
                        marginButtonArrowLeft={"60px"}
                    >
                        <div className='hoverVideoInputLowerBlock'>
                            <div>
                                <span>PRO</span><span>Record video clip</span>
                            </div>
                            <div>This is a paid feature,</div>
                            <div>available with a free, 30-day</div>
                            <div>trail</div>
                        </div>
                    </HoverIcon>
                    <button
                        onMouseOver={() => setIsHoverAudio(!isHoverAudio)}
                        onMouseOut={() => setIsHoverAudio(!isHoverAudio)}
                    >
                        <svg data-ufvi='true' viewBox='0 0 20 20'>
                            <g fill='none' stroke='currentColor' stroke-width='1.5'>
                                <path d='M7.25 5a2.75 2.75 0 1 1 5.5 0v4a2.75 2.75 0 1 1-5.5 0V5Z'></path>
                                <path
                                    stroke-linecap='round'
                                    d='M4.25 7.75V9A5.75 5.75 0 0 0 10 14.75v0A5.75 5.75 0 0 0 15.75 9V7.75m-5.75 7v2.75m2.25.25h-4.5'
                                ></path>
                            </g>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverAudio}
                        marginBlockTop={'-120px'}
                        marginBlockLeft={'20px'}
                        marginButtonArrowLeft={"60px"}
                    >
                        <div className='hoverVideoInputLowerBlock'>
                            <div>
                                <span>PRO</span><span>Record audio clip</span>
                            </div>
                            <div>This is a paid feature,</div>
                            <div>available with a free, 30-day</div>
                            <div>trail</div>
                        </div>
                    </HoverIcon>
                    <button
                        onMouseOver={() => setIsHoverEmoji(!isHoverEmoji)}
                        onMouseOut={() => setIsHoverEmoji(!isHoverEmoji)}
                    >
                        <svg
                            className={
                                isHovering
                                    ? 'svgEmojiInputMessage'
                                    : 'svgEmojiInputMessage'
                            }
                            onMouseOver={handleMouseOver}
                            onMouseOut={handleMouseOut}
                            onClick={() => setEmojiActive(!emojiActive)}
                            style={{transform: isHovering ? 'rotate(30deg)' : "rotate(0deg)"}}
                            data-ufvi='true'
                            viewBox='0 0 20 20'
                        >
                            <g fill='none'>
                                <circle cx='10' cy='10' r='8.25' stroke='currentColor' stroke-width='1.5'></circle>
                                <circle cx='7.5' cy='8' r='1.5' fill='currentColor'></circle>
                                <circle cx='12.5' cy='8' r='1.5' fill='currentColor'></circle>
                                <path stroke='currentColor' stroke-linecap='round' stroke-width='1.5'
                                      d='M6.902 12c.494 1.5 1.81 2.25 3.125 2.25 1.316 0 2.632-.75 3.125-2.25'></path>
                            </g>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverEmoji}
                        marginBlockTop={'-65px'}
                        marginBlockLeft={'110px'}
                        marginButtonArrowLeft={"5px"}
                    >
                        Emoji
                    </HoverIcon>
                    <button
                        onMouseOver={() => setIsHoverMentionSomeone(!isHoverMentionSomeone)}
                        onMouseOut={() => setIsHoverMentionSomeone(!isHoverMentionSomeone)}
                    >
                        <svg data-ufvi='true' viewBox='0 0 20 20'>
                            <g fill='none' stroke='currentColor' stroke-width='1.5'>
                                <circle cx='10' cy='10' r='3.75'></circle>
                                <path stroke-linecap='round'
                                      d='M13.75 6.75v4.605c0 1.047.848 1.895 1.895 1.895v0a2.605 2.605 0 0 0 2.605-2.605V10'></path>
                                <path stroke-linecap='round' d='M18.25 10a8.25 8.25 0 1 0-3.497 6.744'></path>
                            </g>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverMentionSomeone}
                        marginBlockTop={'-65px'}
                        marginBlockLeft={'110px'}
                        marginButtonArrowLeft={"40px"}
                    >
                        Mention Someone
                    </HoverIcon>
                    <button
                        onMouseOver={() => setIsHoverHideFormatting(!isHoverHideFormatting)}
                        onMouseOut={() => setIsHoverHideFormatting(!isHoverHideFormatting)}
                    >
                        <svg data-ufvi='true' viewBox='0 0 20 20'>
                            <g fill='none' stroke='currentColor' stroke-width='1.5'>
                                <path stroke-linecap='round'
                                      d='M10.5 17 6.23 4.19C6 3.5 5.023 3.507 4.803 4.2L.75 17'></path>
                                <path d='M2.25 13h7'></path>
                                <path stroke-linecap='round'
                                      d='M19.25 17v-6.792a2.993 2.993 0 0 0-2.11-2.86v0a3.99 3.99 0 0 0-2.557.069l-.243.09a2.972 2.972 0 0 0-1.792 1.848L12.5 9.5'></path>
                                <path
                                    d='M19 11.75h-3.713c-2.2 0-3.472 2.496-2.177 4.276a2.247 2.247 0 0 0 2.361.856 7.222 7.222 0 0 0 2.757-1.365L19.5 14.5'></path>
                            </g>
                        </svg>
                    </button>
                    <HoverIcon
                        isHover={isHoverHideFormatting}
                        marginBlockTop={'-65px'}
                        marginBlockLeft={'143px'}
                        marginButtonArrowLeft={"40px"}
                    >
                        Hide Formatting
                    </HoverIcon>
                </div>
                <div
                    className={
                        currentMessage.length >= 1
                            ? 'buttonsInputMessage activeButtonInputMessage'
                            : 'buttonsInputMessage'
                    }
                >
                    <button
                        onMouseOver={() => setIsHoverSendMessage(!isHoverSendMessage)}
                        onMouseOut={() => setIsHoverSendMessage(!isHoverSendMessage)}
                        disabled={visibleMessageField || currentMessage.length <= 1}
                        onClick={() =>
                            handleSendButton(
                                currentMessage,
                                currentUserId,
                                currentChannelId
                            )
                        }
                    >
                        <svg data-uqx='true' viewBox='0 0 20 20' className='imgSvgInputMessage'>
                            <path fill='currentColor' stroke='currentColor' stroke-linejoin='round' stroke-width='1.5'
                                  d='M2.25 2.25 17.75 10l-15.5 7.75v-4.539a1.5 1.5 0 0 1 1.46-1.5l6.54-.171a1.54 1.54 0 0 0 0-3.08l-6.54-.172a1.5 1.5 0 0 1-1.46-1.5V2.25Z'></path>
                        </svg>
                    </button>
                    {
                        currentMessage.length >= 1
                        &&
                        <HoverIcon
                            isHover={isHoverSendMessage}
                            marginBlockTop={'-90px'}
                            marginBlockLeft={'-70px'}
                            marginButtonArrowLeft={"55px"}
                        >
                            <div className="hoverSendMessageInputLowerBlock">
                                <div>Send now</div>
                                <div>
                                    <span>Press</span>
                                    <span>Return</span>
                                </div>
                            </div>
                        </HoverIcon>
                    }
                    <button
                        onMouseOver={() => setIsHoverscheduleForLater(!isHoverscheduleForLater)}
                        onMouseOut={() => setIsHoverscheduleForLater(!isHoverscheduleForLater)}
                    >
                        <svg data-uqx='true' viewBox='0 0 20 20' className='imgSvgInputMessage'>
                            <path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round'
                                  stroke-width='1.5' d='M13.75 8 10 11.75 6.25 8'></path>
                        </svg>
                    </button>
                    {
                        currentMessage.length >= 1
                        &&
                        <HoverIcon
                            isHover={isHoverscheduleForLater}
                            marginBlockTop={'-75px'}
                            marginBlockLeft={'-60px'}
                            marginButtonArrowLeft={"75px"}
                        >
                            Schedule for later
                        </HoverIcon>
                    }
                </div>
            </div>
        );
    }
);
