import React, {useState} from 'react';
import './SummaryBar.css';

const SummaryBar = () => {

  const [totalSignup, setTotalSignup] = useState(648);
  const [lastWeek, setLastWeek] = useState(12);
  const [totalInvestment, setTotalInvestment] = useState(102);
  const [averageInvestment, setAverageInvestment] = useState(345565);
  const [totalExits, setTotalExits] = useState(23);

  return (
    <div className="summary-bar-div">
      <div>
        <p className="sub-header">Total signups</p>
        <p className="figure-weight figure1">{totalSignup}</p>
      </div>
      <div>
        <p className="sub-header">Last week</p>
        <p className="figure-weight figure2">{lastWeek}</p>
      </div>
      <div>
        <p className="sub-header">Total investments</p>
        <p className="figure-weight figure3">{totalInvestment.toLocaleString()}</p>
      </div>
      <div>
        <p className="sub-header">Average investments</p>
        <p className="figure-weight figure1"><span className="figure1 figure-weight-nok">NOK</span> {averageInvestment.toLocaleString()}</p>
      </div>
      <div>
        <p className="sub-header">Total exits</p>
        <p className="figure-weight figure2">{totalExits}</p>
      </div>
    </div>
  );
};

export default SummaryBar;

