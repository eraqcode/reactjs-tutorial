import React from 'react';
import './App.css';

function App() {

  let saludo = "Hola";

  const clickHandle = () => {
    alert("Hello Worl!!");
  }

  const mouseOverHandle = () => {
    document.querySelector(".count").style.fontSize = "32px";
    document.querySelector(".count").style.color = "teal";
    document.querySelector(".count").style.fontWeight = "800";
  }

  const mouseLeaveHandle = () => {
    document.querySelector(".count").style.fontSize = "18px";
    document.querySelector(".count").style.fontWeight = "300";
  }

  return (
    <div className="App">
      <header>
        <h1> Event Handling </h1>
      </header>
      
      <p 
        onMouseOver={ mouseOverHandle }
        onMouseLeave={ mouseLeaveHandle }
        className="count"
      >
         { saludo }
      </p>
      <button
        onClick={clickHandle}
      >
        Add 1
      </button>
    </div>
  );
}

export default App;
