import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import data from "./data/data";
import AreaChart from './components/charts/AreaChart';
import DropDown from './components/drop-down/DropDown';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import SideMenu from './components/side-menu/SideMenu';
import SubMenu from './components/sub-menu/SubMenu';
import SummaryBar from './components/summary-bar/SummaryBar';
import UserDetails from './components/user/UserDetails';
import TotalApplications from './components/total-applications/TotalApplications';
import ByCounty from './components/by-county/ByCounty';
import LatestApplications from './components/latest-applications/LatestApplications';

const dropList = [
  {
    value: 'overview1',
    title: 'overview' 
  },
  {
    value: 'overview2',
    title: 'overview 2' 
  },
  {
    value: 'overview3',
    title: 'overview 3' 
  }
]

const AppLayout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 65px 65px 65px auto;
  grid-template-areas: 
    ". lo lo . hm hm hm hm hm hu hu hu"
    "bl ov ov sb sb sb sb sb sb sb sb br"
    ". . sm sm sm . . . . . . ."
    ". . smb smb smb smb smb smb smb smb . ."
    ". vm ca ca ca ca ca ta ta ta . ."
    ". vm ca ca ca ca ca bc bc bc . ."
    ". vm cs cs cs cs cs bc bc bc . ."
    ". vm cs cs cs cs cs la la la . .";

  @media (max-width: 768px) {
    grid-template-areas: 
    ". lo lo . . . hu hu hu hu hu hu"
    ". . . hm hm hm hm hm hm . . ."
    "bl ov ov sb sb sb sb sb sb sb sb br"
    ". . sm sm sm sm . . . . . ."
    ". . smb smb smb smb smb smb smb smb . ."
    ". vm ca ca ca ca ca ca ca ca . ."
    ". vm cs cs cs cs cs cs cs cs . ."
    ". vm ta ta ta ta ta ta ta ta . ."
    ". vm bc bc bc bc bc bc bc bc . ."
    ". vm la la la la la la la la . .";
  }

  @media (max-width: 425px) {
    grid-template-areas: 
    "lo lo lo lo lo lo lo lo lo lo lo lo"
    "hu hu hu hu hu hu hu hu hu hu hu hu"
    "hm hm hm hm hm hm hm hm hm hm hm hm"
    "ov ov ov ov ov ov ov ov ov ov ov ov"
    "sb sb sb sb sb sb sb sb sb sb sb sb"
    "sm sm sm sm sm sm sm sm sm sm sm sm"
    "smb smb smb smb smb smb smb smb smb smb smb smb"
    "vm vm vm vm vm vm vm vm vm vm vm vm"
    "ca ca ca ca ca ca ca ca ca ca ca ca"
    "cs cs cs cs cs cs cs cs cs cs cs cs"
    "ta ta ta ta ta ta ta ta ta ta ta ta"
    "bc bc bc bc bc bc bc bc bc bc bc bc"
    "la la la la la la la la la la la la";
  }
`

const App = () => {
  return(
    <BrowserRouter>
      <AppLayout>
        <div className="logo"><Logo /></div>
        <div className="header-menu"><Menu /></div>
        <div className="header-user"><UserDetails /></div>
        <div className="blank-left"></div>
        <div className="blank-right"></div>
        <div className="overview"><DropDown dropList={dropList} upperCase={true} /></div>
        <div className="summary-bar"><SummaryBar /></div>
        <div className="sub-menu"><SubMenu /></div>
        <div className="sub-menu-border"></div>
        <div className="side-menu"><SideMenu /></div>
        <div className="chart-applications"><AreaChart data={data.applications} header="Applications" color1="#c4d5e2" color2="#1565c0" id="1" /></div>
        <div className="chart-site-trafic"><AreaChart data={data.siteTrafics} header="Site Trafic" color1="#c4d5e2" color2="#7b1fa2" id="2" /></div>
        <div className="total-applications"><TotalApplications data={data.totalApplications} /></div>
        <div className="by-county"><ByCounty /></div>
        <div className="latest-applications"><LatestApplications data={data.latestApplications} /></div>
      </AppLayout>

      <Switch>
        <Route path="/"  />
        <Route path="/help"  />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

