
import { Provider } from 'react-redux';
import { AppRouters } from './routers/AppRouters';
import { store } from './store/store';

function App() {
  return (
    <div>
      <Provider store= {store}>
        <AppRouters />
      </Provider>
    </div>
  );
}

export default App;
