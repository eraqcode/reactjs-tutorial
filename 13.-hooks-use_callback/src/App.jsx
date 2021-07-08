import React, { Fragment, useState, useCallback } from 'react';
import { Button } from './components/Button/Button';


function App() {

  const [counter, setCounter] = useState(10);

  //const incrementar = () => {
  //  setCounter( counter + 1 )
  //}

  const incrementar = useCallback(
    (num) => {
      setCounter( c => c + num )
    },
    [setCounter],
  )

  return (
   <Fragment>
     <div className="container">
       <h2>Hello Woold!!</h2>
        <h3>Counter #: { counter }</h3>
       <Button 
        incrementar={incrementar}
       />
     </div>
     
   </Fragment>
  );
}

export default App;
