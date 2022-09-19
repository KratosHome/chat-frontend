import { NotifyMeAbout } from "../../pages/Notifications";

export interface RadioButtonType {
    value: NotifyMeAbout;
    name: string;
    activeValue: NotifyMeAbout;
    setActive: (e:React.ChangeEvent<HTMLInputElement>)=>void;
 }
 