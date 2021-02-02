import React from 'react';
// Link helps to prevent reload when click the link
// withRouter helps to access props history
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

const Menu = ({ history }) => {

  return (
    <nav>
      <div className="header-menu-div">
        <div>
          <Link className="nav-link" to="/">ACCOUNT</Link>
        </div>
        <div>
          <Link className="nav-link" to="/chart">CHARTS</Link>
        </div>
        <div>
          <Link className="nav-link" to="/help">HELP</Link>
        </div>
      </div>
    </nav>     
  );
};

export default withRouter(Menu);
