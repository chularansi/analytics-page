import React from 'react';
import './SummaryBar.css';

const SummaryBar = () => {
  return (
    <div className="summary-bar-div">
      <div>
        <p className="sub-header">Total applications</p>
        <p className="figure-weight figure1">648</p>
      </div>
      <div>
        <p className="sub-header">Last week</p>
        <p className="figure-weight figure2">12</p>
      </div>
      <div>
        <p className="sub-header">Total investments</p>
        <p className="figure-weight figure3">102</p>
      </div>
      <div>
        <p className="sub-header">Average investments</p>
        <p className="figure-weight figure4"><span className="figure4 figure-weight-nok">NOK</span> 345,565</p>
      </div>
      <div>
        <p className="sub-header">Average investments</p>
        <p className="figure-weight figure5">23</p>
      </div>
    </div>
  );
};

export default SummaryBar;

