import React, { Fragment } from 'react';
import { Server } from './Server'


function App() {
  return (
    <Fragment>
      <main className="container mx-auto">
        <Server
          name = "Server Ocena"
          status = {404}
          message = "Has ocurred an erros. The server can´t be connected"
        />
        
      </main>
      
    </Fragment>
  );
}

export default App;
