import React, {FC} from 'react';
import {participants} from "../../../../../../services/participant.service";
import {MyInput} from '../../../../../UI/MyInput';
import {MembersType} from "./MembersType";
import imgMembers from "./ImgMembers.png"
import "./Members.scss"

export const Members: FC<MembersType> = ({tab, setTab}) => {
    const img = <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20">
        <path fill="currentColor"
              d="M17.22 18.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15 9a6 6 0 0 1-6 6v1.5A7.5 7.5 0 0 0 16.5 9H15Zm-6 6a6 6 0 0 1-6-6H1.5A7.5 7.5 0 0 0 9 16.5V15ZM3 9a6 6 0 0 1 6-6V1.5A7.5 7.5 0 0 0 1.5 9H3Zm6-6a6 6 0 0 1 6 6h1.5A7.5 7.5 0 0 0 9 1.5V3Zm4.47 11.53 3.75 3.75 1.06-1.06-3.75-3.75-1.06 1.06Z"></path>
    </svg>
    return (
        <div className={tab === 2 ? "containerMembers" : "nowVisible"} onClick={() => setTab(2)}>
            <div className="inputMembers">
                <MyInput
                    placeholder={"Find members"}
                    svgImg={img}
                />
            </div>
            <div className="addUserMembers">
                <div/>
                <div>Add people</div>
            </div>
            {participants.map((item: any) =>
                <div key={item.id} className="listMembers">
                    <div>
                        <img src={imgMembers} alt={item.name}/>
                    </div>
                    <div className="nameListMembers">
                        {item.name}
                    </div>
                    <div className="onlineListMembers"/>
                </div>
            )}
        </div>
    );
};
