import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//const element = document.createElement('h1');
//const container = document.getElementById('root');

//element.innerText = "Hola Mundo"
//container.appendChild( element );

//const element = <h1>Hola Mundo desde React</h1>
//const container = document.getElementById('root')

//ReactDOM.render( element, container )

serviceWorker.unregister();
