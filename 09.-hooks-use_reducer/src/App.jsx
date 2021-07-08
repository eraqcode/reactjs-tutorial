import React, { Fragment } from 'react';
import { Counter } from './components/Counter/Counter';
import { Header } from './components/Header/Header';
import { ShoppingList } from './components/ShoppingList/ShoppingList';



function App() {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <Counter />
        <br/>
        <ShoppingList />
      </div>
    </Fragment>
  );
}

export default App;
