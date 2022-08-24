import React, {FC, ReactNode} from 'react';
import "./HoverModal.scss"

type HoverModalType = {
    isModalOpen?: boolean;
    onClose?: () => void;
    modalPosition?: string;
    topCoords?: number;
    leftCoords?: number;
    onBlur?: boolean;
    children: ReactNode;
}


export const HoverModal: FC<HoverModalType> = ({
                                                   children,
                                                   isModalOpen,
                                                   onClose,
                                                   modalPosition,
                                                   topCoords,
                                                   onBlur,
                                                   leftCoords
                                               }) => {
    return (
        <div className='containerHoverModal' onClick={onClose}>
            <div
                className={`modal__content ${modalPosition}`}
                style={{
                    top: `${topCoords}px`,
                    left: `${leftCoords}px`,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
        ;
};
