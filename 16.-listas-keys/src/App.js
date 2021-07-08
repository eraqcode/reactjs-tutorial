import React, { Fragment } from 'react';
import { Numbers } from './components/Numbers/Numbers'
import { Players } from './components/Players/Players';
import './App.css';

import carls from './assets/img/carls.jpg';
import xherdan from './assets/img/xherdan.jpg';
import robert from './assets/img/robert.jpg';
import ronaldinho from './assets/img/ronaldinho.jpg';
function App() {
  const numbers = [1, 2, 4, 7, 10, 14, 241, 545];
  //const numberItem = numbers.map( number => 
  //  <li> {number} </li>
  // )
  
  const players = [
    {img: carls , name: "Carls Rummenigge", country: "Germany", id: 1 },
    {img: ronaldinho , name: "Ronaldinho", country: "Brazil", id: 2 },
    {img: xherdan , name: "Xherdan Xhaqiri", country: "Switzerland", id: 3 },
    {img: robert , name: "Robert Lewandowski", country: "Poland", id: 4 }
  ]
  
  return (
    <Fragment>
      <ul>
        {
          numbers.map( number => {
            return(
              <Numbers
                key= {number}
                number = {number}
              />
            )
          } )
        }
      </ul>

      <hr/>
      <ul className="players">
        {
          players.map( player => {
            return(
              <Players
                key={ player.id }
                img= { player.img }
                name = { player.name }
                country = { player.country }
              />
            )
          } )
        }
      </ul>
    </Fragment>
  );
}

export default App;
