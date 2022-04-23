import React ,{ useState }from 'react';
import {BsClock} from 'react-icons/bs';
import {BsQuestionCircle} from 'react-icons/bs';


export const Header: React.FC = () => {
  return (
    <header className="header d-flex align-items-center pt-1 pb-1">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <div className="header_button">
        <a><BsClock/></a>
        </div>

        <div className="justify-content-start align-items-center search-flex-container search-container">
          <input type="search" className="header-search-field" placeholder="Search..." />
          <div className="magnifier">
            <i className="fa fa-search"></i>
          </div>
        </div>

        <div className="header_button">
          <a><BsQuestionCircle/></a>
        </div>

          <div className="header_avatar">
            <a className="avatar_button">
              <img src="https://ca.slack-edge.com/T02BQPYG0ES-U030NCARJ2K-g32b9a6cf239-32" alt="user" className="avatar_image"/>
              <div className="presence_sign"></div>
            </a>
          </div>
      </div>
    </header>
  );
}

export default Header;

