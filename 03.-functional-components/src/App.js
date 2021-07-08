import React, { Fragment } from 'react';
import { HeaderComponent } from './components/Header/Header';
import { BodyComponent } from './components/Body/Body';

function App() {
  return (
    <Fragment>
      <HeaderComponent />
      <BodyComponent />
    </Fragment>
  );
}

export default App;
