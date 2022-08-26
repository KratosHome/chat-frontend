import {ReactNode} from "react";

export type HoverModalType = {
    children: ReactNode
    isModalOpen: boolean
    topCoords: number
    leftCoords: number
    timerOut: () => void
    timerOver: () => void
}