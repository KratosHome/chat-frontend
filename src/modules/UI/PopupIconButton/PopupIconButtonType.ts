import { ReactNode } from 'react';
export interface PopupIconButtonPropsType {
   buttonAriaLabel: string;
   buttonClass: string;
   buttonData: string;
   buttonClick: () => void;
   buttonMouseOver?: () => void;
   buttonMouseOut?: () => void;
   children: ReactNode;
}
