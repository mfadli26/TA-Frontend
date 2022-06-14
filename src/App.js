import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './redux/localStorage';
import todoApp from './redux/reducers';
import setupAxios from "./redux/setupAxios";
import axios from "axios";

const persistedState = loadState();
const store = createStore(
  todoApp,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    user: store.getState().user,
  });
}, 1000));

setupAxios(axios, store);

function App() {
  return (
    // <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
    // </div>
  );
}

export default App;
