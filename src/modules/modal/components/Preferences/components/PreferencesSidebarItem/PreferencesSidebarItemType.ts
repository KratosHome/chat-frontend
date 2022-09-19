import { IPreference } from "../../../../../../services/preferences.service";


export interface PreferencesSidebarItemType {
    data: IPreference
    active: boolean;
    setActivePreferenceId: (id:number)=>void;
}