
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './main.scss';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/Reducers";

const rootElement = document.getElementById("app"); 
//id is given as app

const root = createRoot(rootElement);

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
