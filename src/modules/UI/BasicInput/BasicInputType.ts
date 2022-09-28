import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export interface BasicInputType {
    value: string;
    placeholder: string;
    setValue: (value:string)=>void;
    svgIcon?:JSX.Element;
    margin?:string;
    fontAwesomeIcon?:IconDefinition;
    iconPosition?: "left"|"right";
 }
 