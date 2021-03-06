import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from './reducers/rootReducer';

//init store
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
