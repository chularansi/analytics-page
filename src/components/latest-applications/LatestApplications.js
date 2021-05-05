import React from 'react';

import './LatestApplications.css';

class LatestApplications extends React.Component {

  renderLatestSignups() {
    return this.props.data.map(latest => {
      const borderColor = latest.category === 'competence' ? 'la-latest-left-comp' : 'la-latest-left-cap';

      return (
        <React.Fragment key={latest.id}>
          <div className="la-list-child la-list-pad-left">
            <div className={`la-list-text ${borderColor}`}>{latest.name}</div>
          </div>
          <div className="la-list-child">
            <div className="la-list-text">{latest.time}</div>
          </div>
        </React.Fragment>
      );
    });
  }

  render() {
    return (
      <div className="la-wrapper">
        <div className="la-title">
          Latest applications
        </div>
        <div className="la-container">
          <div className="la-list-header la-list-pad-left">Name</div>
          <div className="la-list-header">Scheduled Meeting</div>
          {this.renderLatestSignups()}
        </div>
      </div>
    );
  }
}

export default LatestApplications;

// 
// <div style={{width: '100%'}}><hr className="hr-style" /></div>
