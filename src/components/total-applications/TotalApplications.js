import React from 'react';
import PieChart from '../charts/PieChart';

import './TotalApplications.css';

const TotalApplications = ({data}) => {

  const renderTotalApplications = () => {
    return data.map(application => {
      const borderColor = application.category === 'Competence' ? 'ta-right-comp' : 'ta-right-cap';

      return (
        <React.Fragment key={application.id}>
          <div className="ta-list">
            <div className="ta-text">{application.category}</div>
            <div className={`ta-text ${borderColor}`} style={{justifySelf: 'end'}}>{application.value}</div>
          </div>
        </React.Fragment>
      );
    })
  }

  return (
    <div className="ta-container">
      <div>
        <PieChart pieData={data} innerRadius={65} outerRadius={80} />
      </div>
      <div>
        <div className="ta-sub-grid">
          <div className="ta-header">Total applications</div>
          <div>
            {renderTotalApplications()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalApplications;