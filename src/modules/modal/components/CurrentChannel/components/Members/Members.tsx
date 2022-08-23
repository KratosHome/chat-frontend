import React, {FC} from 'react';

type MembersType = {
    tab: any
    setTab: any
}
export const Members: FC<MembersType> = ({tab, setTab}) => {
    return (
        <div className={tab === 2 ? "visibleTabs" : "nowVisible"} onClick={() => setTab(2)}>
            Members
        </div>
    );
};
