import React, {memo, useState} from 'react';
import './ChannelDescription.scss';
import {ChannelDescriptionPropsType} from './ChannelDescriptionType';
import {AddDescription, ReactModal} from '../../../modal';
import {AddPeopleMessage} from '../../../modal/components/AddPeopleMessage/AddPeopleMessage';
import imgUser from "./add-user.png"

export const ChannelDescription: React.FC<ChannelDescriptionPropsType> = memo(
    ({currentChannel, placeholderName}) => {
        const [isModalOpenAddPeople, setIsModalOpenAddPeople] = useState<boolean>(false);
        const [isModalOpenDescription, setIsModalOpenDescription] = useState<boolean>(false);
        const [descriptionChannel, setDescriptionChannel] = useState<string>("This channel is for workspace-wide communication and announcements. All members are in this channel.")

        return (
            <>
                <div className='description'>
                    <div className='description__container'>
                        <div
                            className='description__image'
                            role='img'
                            aria-label='lightbulb icon'
                        >
                            <svg width='36' height='36' viewBox='0 0 36 36' fill='none'
                                 xmlns='http://www.w3.org/2000/svg'>
                                <g>
                                    <rect width='36' height='36' fill='#F4EDE4'></rect>
                                    <path
                                        d='M 13 14.4597 C 13.0447 16.5195 13.2595 18.6148 15.4423 19.3002 C 16.983 19.784 18.5111 18.4157 18.2829 16.744 C 18.1569 15.8207 16.7339 14.1873 15.806 14.1334 C 14.3918 14.0511 15.9432 16.2505 16.3603 16.6715 C 19.0595 19.3958 20.7396 14.351 17.9192 13.6801 C 14.2061 12.7969 16.4065 19.0544 19.5473 17.3241 C 21.4682 16.2659 19.7724 12.1754 17.8326 12.1754 C 14.8179 12.1754 14.3285 15.0525 16.3256 17.1428 C 18.131 19.0325 22.2334 17.5215 21.9896 14.5866 C 21.7787 12.0478 16.3332 10.6435 14.6975 12.1754 C 13.1823 13.5944 13.4124 15.9079 14.7321 17.4148 C 16.1338 19.0153 19.39 19.2374 19.5473 16.2726 C 19.671 13.9434 19.068 12.1754 16.7413 12.1754 C 16.0938 12.1754 14.4162 12.9606 15.5635 12.1754 C 16.3424 11.6423 16.8966 11.2446 17.7459 11.8491 C 18.7129 12.5372 21.6416 15.7663 20.3095 16.9071 C 20.1974 17.0031 18.6429 18.2942 18.5081 17.9768 C 18.4534 17.8479 20.6925 16.198 20.8984 15.9825 C 21.3991 15.4585 21.7043 14.8072 21.7298 14.0608 C 21.8074 11.7861 18.8587 10.2527 16.8626 11.3777 C 14.7194 12.5856 12.0958 15.4279 14.0046 18.1943 C 14.7367 19.2552 15.8211 19.5371 16.5854 20.5149 C 17.1993 21.3002 16.7413 23.0225 16.7413 22.4547 C 16.7413 21.6941 16.472 21.0442 16.4296 20.3336 C 16.4273 20.2953 16.6743 21.4351 16.9838 21.9652 C 18.5744 24.6895 18.3002 21.342 18.3002 19.8441 C 18.3002 19.2783 18.1407 18.1943 18.6813 18.1943 C 19.142 18.1943 18.3147 20.3341 18.2309 20.5874 C 17.4696 22.8895 20.219 18.3872 20.4827 17.9043 C 20.7961 17.3302 19.9715 18.7948 19.8591 18.9558 C 19.4319 19.5676 18.3911 20.0073 17.6767 20.0073 C 16.2068 20.0073 16.685 17.8656 16.4122 16.5808 C 16.2754 15.9362 14.6522 15.2616 14.5589 16.0913 C 14.4931 16.6767 15.3557 18.2398 15.3557 17.6504 C 15.3557 17.3638 13.8592 16.2889 14.888 16.1095 C 15.8391 15.9435 18.7448 16.0913 17.7806 16.0913 C 17.5433 16.0913 15.8931 15.6262 16.4988 15.8375 C 18.1208 16.4034 16.818 14.8115 16.1178 14.3872 C 14.8587 13.6242 16.5955 14.1255 17.0531 14.2965 C 17.9158 14.619 17.5539 15.2739 18.1443 15.8919 C 18.6654 16.4373 17.4726 14.5137 17.0531 13.8795 C 16.543 13.1083 15.8317 13.2411 15.2517 12.7555 C 13.8309 11.5659 16.3577 11.0013 16.7413 11.704 C 17.6684 13.4022 13.9158 13.9305 16.9838 13.807 C 18.0531 13.764 19.3892 13.1304 20.6212 13.4988 C 21.9199 13.8872 20.4827 15.4913 20.4827 16.0913'
                                        stroke='#F2C744' stroke-width='1.5' stroke-linecap='round'
                                        stroke-linejoin='round'></path>
                                    <path
                                        d='M 16.78 24 C 16.3333 24 15.9667 23.8567 15.68 23.57 C 15.3933 23.2833 15.25 22.9167 15.25 22.47 V 20.97 C 15.25 20.8367 15.2133 20.7167 15.14 20.61 C 15.0733 20.5033 14.9733 20.3867 14.84 20.26 C 14.0933 19.5533 13.5167 18.9267 13.11 18.38 C 12.71 17.8267 12.4233 17.2733 12.25 16.72 C 12.0833 16.1667 12 15.5267 12 14.8 C 12 13.84 12.27 12.9133 12.81 12.02 C 13.3567 11.12 14.09 10.3933 15.01 9.84 C 15.93 9.28 16.9267 9 18 9 C 19.0733 9 20.07 9.28 20.99 9.84 C 21.91 10.3933 22.64 11.12 23.18 12.02 C 23.7267 12.9133 24 13.84 24 14.8 C 24 15.5267 23.9133 16.1667 23.74 16.72 C 23.5733 17.2733 23.2867 17.8267 22.88 18.38 C 22.48 18.9267 21.9067 19.5533 21.16 20.26 C 21.0267 20.3867 20.9233 20.5033 20.85 20.61 C 20.7833 20.7167 20.75 20.8367 20.75 20.97 V 22.47 C 20.75 23.49 20.24 24 19.22 24 H 16.78 Z M 19 22.5 C 19.0733 22.5 19.1333 22.4767 19.18 22.43 C 19.2267 22.3767 19.25 22.3167 19.25 22.25 V 20.6 C 19.25 20.34 19.3133 20.12 19.44 19.94 C 19.5667 19.7533 19.7633 19.5333 20.03 19.28 L 20.22 19.1 C 20.82 18.5067 21.28 17.99 21.6 17.55 C 21.9267 17.1033 22.1567 16.6667 22.29 16.24 C 22.43 15.8133 22.5 15.3333 22.5 14.8 C 22.5 14.1067 22.2967 13.4267 21.89 12.76 C 21.4833 12.0933 20.9333 11.55 20.24 11.13 C 19.5467 10.71 18.8 10.5 18 10.5 C 17.2 10.5 16.4533 10.71 15.76 11.13 C 15.0667 11.55 14.5167 12.0933 14.11 12.76 C 13.7033 13.4267 13.5 14.1067 13.5 14.8 C 13.5 15.34 13.5667 15.8233 13.7 16.25 C 13.84 16.67 14.07 17.1033 14.39 17.55 C 14.7167 17.9967 15.18 18.5167 15.78 19.11 L 15.97 19.29 C 16.2367 19.5433 16.4333 19.7633 16.56 19.95 C 16.6867 20.13 16.75 20.35 16.75 20.61 V 22.25 C 16.75 22.3167 16.7733 22.3767 16.82 22.43 C 16.8733 22.4767 16.9333 22.5 17 22.5 H 19 Z M 16.76 27 C 16.54 27 16.3567 26.93 16.21 26.79 C 16.07 26.65 16 26.47 16 26.25 C 16 26.03 16.07 25.85 16.21 25.71 C 16.3567 25.57 16.54 25.5 16.76 25.5 H 19.24 C 19.46 25.5 19.64 25.57 19.78 25.71 C 19.9267 25.85 20 26.03 20 26.25 C 20 26.47 19.9267 26.65 19.78 26.79 C 19.64 26.93 19.46 27 19.24 27 H 16.76 Z'
                                        fill='#4A154B'></path>
                                </g>
                            </svg>

                        </div>
                        <div className='description__content'>
                            <div className='description__header'>
                                This is the very beginning of the{' '}
                                <span className='description__channel'>
                           <span className='description__channel-container'>
                              <span className='description__channel-icon'>
                                 <svg
                                     data-aqc='true'
                                     aria-hidden='true'
                                     viewBox='0 0 20 20'
                                 >
                                    <path
                                        fill='none'
                                        stroke='currentColor'
                                        stroke-linecap='round'
                                        stroke-width='1.5'
                                        d='m 9 3.75 l -2.5 14.5 m 7.25 -14.5 l -2.5 14.5 m -7.5 -10.5 h 13.5 m -14.5 7 h 13.5'
                                    ></path>
                                 </svg>
                              </span>
                              <span className='description__channel-name'>
                                 {currentChannel}
                              </span>
                           </span>
                        </span>{' '}
                                channel
                            </div>
                            <div className='description__body'>
                        <span className='description__body-text'>
                           {descriptionChannel}
                        </span>
                                <button
                                    className='description__body-button'
                                    onClick={() => setIsModalOpenDescription(!isModalOpenDescription)}
                                >
                                    Edit description
                                </button>
                            </div>
                            <button
                                className='description__body-button iconChannelDescription'
                                onClick={() => setIsModalOpenAddPeople(!isModalOpenAddPeople)}
                            >
                                <img src={imgUser} alt="icon user"/>
                                Add people
                            </button>
                        </div>
                    </div>
                    <ReactModal
                        isModalOpen={isModalOpenAddPeople}
                        onClose={() => setIsModalOpenAddPeople(!isModalOpenAddPeople)}
                        modalPosition={'add-center-position'}
                        onBlur={true}
                    >
                        <AddPeopleMessage
                            placeholderName={placeholderName}
                            closeModal={setIsModalOpenAddPeople}
                        />
                    </ReactModal>
                    <ReactModal
                        isModalOpen={isModalOpenDescription}
                        onClose={() => setIsModalOpenDescription(!isModalOpenDescription)}
                        modalPosition={'add-center-position'}
                        onBlur={true}
                    >
                        <AddDescription
                            setIsModalOpenDescription={setIsModalOpenDescription}
                            descriptionChannel={descriptionChannel}
                            setDescriptionChannel={setDescriptionChannel}
                        />
                    </ReactModal>
                </div>
            </>
        );
    },
);
