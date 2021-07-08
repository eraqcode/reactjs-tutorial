import React from 'react';

import { Counter } from './components/Counter/Counter';
import { Saludo } from './components/Saludo/Saludo';


function App() {
  return (
    <div className="container">
      <Saludo 
        greet= "Hi, I´m Erik"
        subtitle= "A simple web developer"
      />
      <hr/>
      <Counter
        value={0}
      />
    </div>
  );
}



export default App;
