import React, { Fragment } from 'react';
import { Hamburger } from './components/Hamburger/Hamburger';
import { Pizza } from './components/Pizza/Pizza'
import './App.css';

function App() {
  return (
    <Fragment>
      <main>
        <header>
           <h3>Hamburgers</h3>
        </header>
        <Hamburger
          name = "Ranchera Especial"
          price = {5.45}
        />
        <Hamburger
          name = "Buck Fire"
          price = {2.30}
        />
        <Hamburger
          name = "Punch Repicante Triple"
          price = {8.50}
        />

        <header>
          <h3>Pizzas</h3>
        </header>
        <Pizza 
          name = "Napolitana"
          size = "Big"
          price = {12.00}
        />
        <Pizza 
          name = "EraqCiana"
          size = "Familiar"
          price = {18.00}
        />
        <Pizza 
          name = "Binaria EXtra Cheese"
          size = "Giant"
          price = {24.00}
        />
        <Pizza 
          name = "Python Hawaiana"
          size = "Medium"
          price = {10.00}
        />
      </main>
    </Fragment>
  );
}

export default App;
