import React, {memo, useState} from 'react';
import './Header.scss';
import {History} from '../../components/History';
import {Search} from '../../components/Search';
import {Help} from '../../components/Help';
import {HeaderType} from './HeaderType';
import {ReactModal, SearchModal, SidebarMoreMenu} from "../../../modal";

export const Header: React.FC<HeaderType> = memo(({currentUserName, chanelName}) => {
    const [isModalSidebarMoreOpen, setIsModalSidebarMoreOpen] = useState<boolean>(false);
    return (
        <>
            <header className='header'>
                <div className='header__container'>
                    <History/>
                    <Search oenModal={setIsModalSidebarMoreOpen}/>
                    <Help currentUserName={currentUserName}/>
                </div>
            </header>
            <ReactModal
                isModalOpen={isModalSidebarMoreOpen}
                onClose={() => setIsModalSidebarMoreOpen(!isModalSidebarMoreOpen)}
                modalPosition={"search-header-position"}
            >
                <SearchModal
                    chanelName={chanelName}
                    onClose={setIsModalSidebarMoreOpen}
                />
            </ReactModal>
        </>
    );
});
