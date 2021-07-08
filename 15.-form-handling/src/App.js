import React, { Fragment } from 'react';
import { TravelList } from './components/TravelList/TravelList';



function App() {
  return (
    <Fragment>
      <div className="w-4/5 mx-auto">
        <header>
          <h1 className="text-white text-center text-2xl text-teal-200 font-extrabold"> WISHED TRAVELS </h1>
        </header>
        <TravelList />
      </div>
      
    </Fragment>
  )
}

export default App;
