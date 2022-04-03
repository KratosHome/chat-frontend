import React ,{ useState }from 'react';
import {BsClock} from 'react-icons/bs';


export const Header: React.FC = () => {
  return (
    <header className="header d-flex align-items-center pt-1 pb-1">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        <div className="header-history_button col-2">
        <a><BsClock/></a>
        </div>

        <div className="justify-content-start align-items-center search-flex-container">
          <input type="search" className="header-search-field" placeholder="Search..." />
        </div>

        <div className="align-items-center header-right">
          <button>
            <span className="header_button">
              <img src="https://ca.slack-edge.com/T02BQPYG0ES-U030NCARJ2K-g32b9a6cf239-32" alt="user button" />
            </span>
          </button>
        </div> 

      </div>
    </header>
  );
}

// export default Header;

