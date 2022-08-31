import { ReactNode } from 'react';
export interface MessageActionsButtonPropsType {
   buttonClass: string;
   ariaLabel: string;
   ariaLabelImg?: string;
   data: string;
   dataImg?: string;
   alt?: string;
   src?: string;
   children?: ReactNode;
   setFocus?: React.Dispatch<React.SetStateAction<boolean>>;
   tooltip: string;
   marginTop: string;
   marginLeft: string;
   marginArrow: string;
}
