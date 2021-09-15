import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import RadionButtonList from "./common/RadioButtonList/RadioButtonList";
import AreaList from './master/Area/Area';
import LanguagesList from './master/Languages/Languages';
import Registration from "./functional/Registration/Registration";

const App = ()=>{

  return (
    <div className="App">
      <Registration />
    </div>
  );
}


export default App;
