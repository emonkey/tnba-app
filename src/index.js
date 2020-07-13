import React from 'react';
import document from 'global/document';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { render } from 'react-dom';

import store from './Utilities/Store';
import AppMain from './Components/AppMain';

import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Root = () => (
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={AppMain} />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

render(<Root />, document.body.appendChild(document.createElement('div')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

