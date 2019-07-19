import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import configureStore from './store/ConfigureStore';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

const store = configureStore();
const history = createBrowserHistory({ basename: '/' });

ReactDOM.render(
<Provider store={store}>
  <Router history={history}>
    <App />
  </Router>
</Provider>
  ,document.getElementById('root'));


serviceWorker.unregister();

