import React from "react";
import { PreferencesNotifications } from "../modules/modal/components/Preferences/pages/Notifications";

export interface IPreference {
    id:number;
    text: string;
    icon: JSX.Element;
    component?: JSX.Element;
}

export const preferencesData:IPreference[] = [
    {   
        id:1,
        text:"Notifications",
        icon:( <svg data-l8x="true"  viewBox="0 0 20 20" ><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M10 2.25c-1 0-1.63.691-1.75 2-2.5.5-3.468 2.616-3.5 7.25l-2.083 2.09c-.929 1.022-.204 2.16 1.176 2.16h3.989c.096.926.764 2 2.182 2 1.398 0 2.06-1.074 2.155-2h3.986c1.38 0 2.105-1.138 1.176-2.16L15.25 11.5c-.03-4.634-1-6.75-3.5-7.25-.12-1.309-.75-2-1.75-2Z"></path></svg>),
        component:<PreferencesNotifications/>
    },
    {   
        id:2,
        text:"Sidebar",
        icon:( <svg data-l8x="true"  viewBox="0 0 20 20" ><path fill="currentColor" d="M13.5 5.75a.75.75 0 0 0 0 1.5v-1.5Zm1.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1.5 1.5a.75.75 0 0 0 0 1.5v-1.5Zm1.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-1.5 1.5a.75.75 0 0 0 0 1.5v-1.5Zm1.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm2-7v7.5h1.5v-7.5H17Zm-14 7.5v-7.5H1.5v7.5H3ZM5.25 16A2.25 2.25 0 0 1 3 13.75H1.5a3.75 3.75 0 0 0 3.75 3.75V16ZM17 13.75A2.25 2.25 0 0 1 14.75 16v1.5a3.75 3.75 0 0 0 3.75-3.75H17ZM14.75 4A2.25 2.25 0 0 1 17 6.25h1.5a3.75 3.75 0 0 0-3.75-3.75V4Zm-9.5-1.5A3.75 3.75 0 0 0 1.5 6.25H3A2.25 2.25 0 0 1 5.25 4V2.5Zm0 1.5H11V2.5H5.25V4ZM11 4h3.75V2.5H11V4Zm3.75 12H11v1.5h3.75V16ZM11 16H5.25v1.5H11V16Zm-.75-12.75v13.5h1.5V3.25h-1.5Zm3.25 4H15v-1.5h-1.5v1.5Zm0 3H15v-1.5h-1.5v1.5Zm0 3H15v-1.5h-1.5v1.5Z"></path></svg>),
    },
    {   
        id:3,
        text:"Themes",
        icon:(<svg data-l8x="true"  viewBox="0 0 20 20" ><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.25 10c0 1.5-3.25 6.25-8.25 6.25S1.75 11.5 1.75 10 5 3.75 10 3.75 18.25 8.5 18.25 10Z"></path><circle cx="10" cy="10" r="3.25"></circle></g></svg>),
    },
    {
        id:4,
        text:"Messages & media",
        icon:(<svg data-l8x="true"  viewBox="0 0 20 20" ><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinejoin="round" d="M16.78 13.759a7.75 7.75 0 1 0-3.02 3.02l3.99.971-.97-3.991Z"></path><path strokeLinecap="round" d="M6.75 8.25h6.5m-6.5 3.5h4.5"></path></g></svg>)
    },
    {
        id:5,
        text:"Language & region",
        icon:(<svg data-l8x="true"  viewBox="0 0 20 20" ><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="10" cy="10" r="8.25"></circle><path d="M2 10h16m-8-8.5C9 2.833 7 6 7 10s2 7.167 3 8.5m0-17c1 1.333 3 4.5 3 8.5s-2 7.167-3 8.5"></path></g></svg>)
    },
    {
        id:6,
        text:"Accessibility",
        icon:(<svg data-l8x="true" viewBox="0 0 20 20" ><g fill="none"><path stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="m3.25 10.25-1.665 6.242a1 1 0 0 0 .967 1.258h14.896a1 1 0 0 0 .967-1.258L16.75 10.25m-13.5 0v-6.5a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5v6.5m-13.5 0h13.5"></path><path fill="currentColor" d="M7 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm7.5 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-5.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm3.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM5 16a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.25-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM15 16a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-6.75-.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM10 16a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"></path></g></svg>)
    },
    {
        id:7,
        text:"Mark as read",
        icon: <svg data-l8x="true"  viewBox="0 0 20 20" ><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M17.076 8.416a7.25 7.25 0 1 1-3.717-4.842"></path><path fill="currentColor" d="M8.092 8.79a.75.75 0 1 0-1.184.92l1.184-.92Zm1.741 3.46-.592.46a.75.75 0 0 0 1.16.03l-.568-.49Zm7.484-7.51a.75.75 0 1 0-1.134-.98l1.134.98ZM6.908 9.71l2.333 3 1.184-.92-2.333-3-1.184.92Zm3.493 3.03 6.916-8-1.134-.98-6.917 8 1.135.98Z"></path></g></svg>
    },
    {
        id:8,
        text:"Audio & video",
        icon:<svg data-l8x="true"  viewBox="0 0 20 20" ><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 3.75a1.5 1.5 0 0 0-1.5 1.5v9.5a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5v-2.59l3.75 2.159a.5.5 0 0 0 .75-.434v-7.77a.5.5 0 0 0-.75-.433L13.75 7.84V5.25a1.5 1.5 0 0 0-1.5-1.5h-8.5Z"></path></svg>
    },
    {
        id:9,
        text:"Connected accounts",
        icon:<svg data-l8x="true"  viewBox="0 0 20 20"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.5 11-6-6-2 2a4.243 4.243 0 0 0 6 6l2-2ZM12 6.5l2.75-2.75M15 9.5l2.75-2.75m-9.5 6.75-2.353 2.55c-.413.446-.993.7-1.6.7v0c-.662 0-1.288-.3-1.7-.817L2.25 15.5"></path></svg>
    },
    {
        id:10,
        text:"Privacy & visibility",
        icon:<svg data-l8x="true" viewBox="0 0 20 20" ><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M16.25 16.25v-6.5a1.5 1.5 0 0 0-1.5-1.5h-9.5a1.5 1.5 0 0 0-1.5 1.5v6.5a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1Zm-10-8V6a3.75 3.75 0 1 1 7.5 0v2.25"></path></svg>
    },
    {
        id:11,
        text:"Advanced",
        icon:<svg data-l8x="true"  viewBox="0 0 20 20" ><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinejoin="round" d="M8.793 1.983 8.75 2l-.33 1.506a1.25 1.25 0 0 1-1.895.785L5.227 3.46l-.042.019a3.25 3.25 0 0 0-1.707 1.707l-.019.042.832 1.298a1.25 1.25 0 0 1-.785 1.896L2 8.75l-.017.042a3.25 3.25 0 0 0 0 2.414L2 11.25l1.506.33a1.25 1.25 0 0 1 .785 1.895l-.832 1.298.019.043a3.25 3.25 0 0 0 1.707 1.707l.042.018 1.298-.832a1.25 1.25 0 0 1 1.896.785L8.75 18l.043.017c.775.31 1.64.31 2.414 0L11.25 18l.33-1.506a1.25 1.25 0 0 1 1.895-.785l1.298.832.043-.018a3.25 3.25 0 0 0 1.707-1.707l.018-.043-.832-1.298a1.25 1.25 0 0 1 .785-1.896L18 11.25l.017-.043a3.25 3.25 0 0 0 0-2.414L18 8.75l-1.506-.33a1.25 1.25 0 0 1-.785-1.895l.832-1.298-.018-.042a3.25 3.25 0 0 0-1.707-1.707l-.043-.019-1.298.832a1.25 1.25 0 0 1-1.896-.785L11.25 2l-.043-.017a3.25 3.25 0 0 0-2.414 0Z"></path><circle cx="10" cy="10" r="2.75"></circle></g></svg>
    }
 ];