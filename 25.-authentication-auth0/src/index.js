import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain="dev-kswf0y93.us.auth0.com"
    clientId="vT2sXzHMUu8csCwjPTKpX4l7au72RHAA"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

