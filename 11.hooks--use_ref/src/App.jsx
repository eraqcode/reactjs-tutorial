import React, { Fragment, useRef } from 'react';

import './App.css';

function App() {

  const inputRef = useRef();

  const handleButtonClick = () =>  {
    console.log(inputRef);
    inputRef.current.select();
    //document.querySelector('input').select();
  }

  return (
    <Fragment>
      <main>
        <input
          ref={inputRef}
          type="text"
          placeholder ="Ingrese texto"
        />

        <button onClick={handleButtonClick}>
           Focus
        </button>
        
      </main>
    </Fragment>
  );
}

export default App;
