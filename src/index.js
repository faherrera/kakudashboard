import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'semantic-ui-css/semantic.min.css';
import './assets/master.scss';
import { Provider } from 'react-redux';
import configStore from './store/configStore';

//Store
const KAKU_STORE = configStore;

const INIT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={KAKU_STORE}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  INIT_NODE,
);
