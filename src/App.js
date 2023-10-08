import logo from './logo.svg';
import React, { useState } from 'react';
import './style/App.css';
import Hours from './Hours';
import Week from './Week';
import CurrentInfo from './CurrentInfo';
import Todo from './todo';
import Menu from './Menu';
import SideBar from './SideBar';

function Days({date}) {
  return(
    <div className="days">
      <div className="today">
        <div className="inner-content">
          <CurrentInfo date={date}/>
          <Todo/>
        </div>
      </div>
      <Week date={date}/>
    </div>
  )
}

function Content({date}){
  return(
    <div className="content">
      <Days date={date}/>
      <Hours date={date}/>
    </div>
  )
}

function App() {
  const date = new Date();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div className="App">
      <Menu OnClick={toggleSideMenu}/>
      {showSideMenu && <SideBar />}
      <Content date={date}/>
    </div>
  );
}

export default App;
