import { store } from './Store';
import Counter from './Counter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
           <Provider store={store}>
                <Counter />
          </Provider>
    </div>
  );
}

export default App;
