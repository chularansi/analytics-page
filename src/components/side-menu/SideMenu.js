import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SideMenu.css';

const iconPath = '/assets/icons';

const SideMenu = ({history}) => {

  const isActive = (history, path) => {
    if(history.location.pathname === path) {
      return {backgroundColor: "#09121c"};
    }
  };

  return (
    <nav>
      <div className="side-menu-div">
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/Group 174.svg`} style={isActive(history, '/groups')} className="icon-size" alt="Group Icon" />
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/funds.svg`} style={isActive(history, '/funds')} className="icon-size" alt="Funds Icon" />
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/Path 188.svg`} style={isActive(history, '/path')} className="icon-size" alt="Path Icon" />
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/history.svg`} style={isActive(history, '/history')} className="icon-size" alt="History Icon" />
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/verification-window-button.svg`} style={isActive(history, '/verification')} className="icon-size" alt="Verification Icon" />
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/">
            <img src={`${iconPath}/locked-padlock.svg`} style={isActive(history, '/trades')} className="icon-size" alt="Trades Icon" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(SideMenu);