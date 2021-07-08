import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Memo } from './components/Memo/Memo';
import { UseMemo } from './components/useMemo/UseMemo'

function App() {
  return (
    <Fragment>
      <Memo />
      <br/>
      <UseMemo />
    </Fragment>
  );
}

export default App;
