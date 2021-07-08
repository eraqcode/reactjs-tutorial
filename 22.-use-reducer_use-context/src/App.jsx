import { Buttons } from "./components/Buttons/Buttons";
import { CounterProvider } from "./context/CounterContext";
const { CounterDisplay } = require("./components/CounterDisplay/CounterDisplay");


function App() {
  return (
    <div className="container">
      <div className="row">
        <CounterProvider>
          <div className="col-7">
          <Buttons />
          </div>
          <div className="col-5">
            <CounterDisplay/>
          </div> 
        </CounterProvider>
      </div> 
    </div> 
  ); 
}

export default App;
