import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import configureStore from './store/store';
import { AppContainer } from 'react-hot-loader';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App/>
    </Provider>
  </AppContainer>
  , root);
