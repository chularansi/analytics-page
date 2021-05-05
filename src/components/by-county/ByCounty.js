import React from 'react';

import './ByCounty.css';

const ByCounty = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="bc-container">
      <div className="bc-by-county bc-text">County</div>
      <div className="bc-dropdown">
        <select onChange={handleChange}>
          <option value="male">Female</option>
          <option value="female">Male</option>
        </select>
      </div>
      <div className="bc-dropdown">
        <select onChange={handleChange}>
          <option value="individual">Individuals</option>
          <option value="company">Other</option>
        </select>
      </div>
      <div className="bc-text">102</div>
    </div>
  );
}

export default ByCounty;