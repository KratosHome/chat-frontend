import { ReactNode } from 'react';
export interface PopupButtonPropsType {
   buttonClass: string;
   isButtonBlocked?: boolean;
   buttonText?: string;
   buttonClick?: () => void;
   additionalClass?: string;
   children?: ReactNode;
}
