import React, { Fragment, useState } from 'react';

import './App.css';
import { StateArray } from './components/StateArray/StateArray';
import { StateObject } from './components/StateObject/StateObject';
import { StateArrayObject } from './components/StateArrayObject/StateArrayObject'
function App() {

  const [ counter, setCounter ] = useState( 1 ) 

  const fruitState = useState( 'banana' );
  const fruit = fruitState[0];
  const setFruit = fruitState[1];

  return (
    <Fragment>
      <header>
        <h2>Counter</h2>
      </header>

      <p> <strong> { counter } </strong> </p>

      <button
        onClick={ () => { setCounter( counter + 1 ) } }
      >
        Count
      </button>

      <p> <strong> { fruit } </strong> </p>
      <button
        onClick={ () => { setFruit( 'pineapple' ) } }
      >
        Change Fruit
      </button>
      <br/>
      <hr/>

      <StateArray/>
      <br/>
      <hr/>

      <StateObject/>
      <br/>
      <hr/>

      <StateArrayObject/>
    </Fragment>
  );
}

export default App;
