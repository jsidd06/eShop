import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './views/StateProvider/StateProvider';
import Reducer, {initialState} from './views/Reducer/Reducer';
ReactDOM.render(
  <React.StrictMode>
    <StateProvider reducer={Reducer} initialState={initialState}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
