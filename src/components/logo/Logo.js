import React from 'react';
import './Logo.css';

const Logo = () => {
  return(
    <div className="logo-div">
      <div>
        <img src={'assets/images/logo.png'} style={{height: '52px', width: '150px'}} alt="" />
      </div>
    </div>
  );
};

export default Logo;