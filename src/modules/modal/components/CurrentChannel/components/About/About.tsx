import React, {FC} from 'react';
import {CSSTransition} from "react-transition-group";

type AboutType = {
    tab: any
    setTab: any
}
export const About: FC<AboutType> = ({tab, setTab}) => {
    return (
        <div>
                about
        </div>
    );
};
