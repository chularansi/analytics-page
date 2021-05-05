import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './SubMenu.css';

const SubMenu = ({history}) => {

  const isActive = (history, path) => {
    if(history.location.pathname === path) {
      return {color: "#e04046"};
    } 
  };

  return (
    <nav>
      <div className="sub-menu-div">
        <div>
          <Link className="nav-link" to="/" style={isActive(history, '/')}>Status</Link>
        </div>
        <div>
          <Link className="nav-link" to="/" style={isActive(history, '/applications')}>Applications</Link>
        </div>
        <div>
          <Link className="nav-link" to="/" style={isActive(history, '/site-trafic')}>Site Trafic</Link>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(SubMenu);