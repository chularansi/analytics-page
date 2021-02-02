import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import DropDown from './components/drop-down/DropDown';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import SubHeader from './components/sub-header/SubHeader';
import SummaryBar from './components/summary-bar/SummaryBar';
import UserDetails from './components/user/UserDetails';

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
    ". lo . . hm hm hm hm hm hu hu hu"
    "bl ov sb sb sb sb sb sb sb sb sb br"
    ". . h3 h3 h3 h3 h3 h3 h3 h3 . ."
    ". m c c c c c c c c . .";

  @media (max-width: 768px) {
    grid-template-areas: 
    ". lo lo . . . hu hu hu hu hu hu"
    ". . . hm hm hm hm hm hm . . ."
    "bl ov sb sb sb sb sb sb sb sb sb br"
    ". . h3 h3 h3 h3 h3 h3 h3 h3 . ."
    ". m c c c c c c c c . .";
  }

  @media (max-width: 425px) {
    grid-template-areas: 
    "lo lo lo lo lo lo lo lo lo lo lo lo"
    "hu hu hu hu hu hu hu hu hu hu hu hu"
    "hm hm hm hm hm hm hm hm hm hm hm hm"
    "ov ov ov ov ov ov ov ov ov ov ov ov"
    "sb sb sb sb sb sb sb sb sb sb sb sb"
    ". . h3 h3 h3 h3 h3 h3 h3 h3 . ."
    ". m c c c c c c c c . .";
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
        <div className="header3">Sub Header 2</div>
        <div className="side-menu">Side menu</div>
        <div className="content">Chart and other content</div>
      </AppLayout>

      <Switch>
        <Route path="/"  />
        <Route path="/help"  />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

