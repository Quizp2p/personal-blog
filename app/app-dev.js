// LIBRARY
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import {render} from 'react-dom';
import {Router} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

// DEPENDENCY
import routes from './routes';

const history = createBrowserHistory();

if(typeof document !== 'undefined' && window) {
  window.onload = () => {
    render(<Router history={history} routes={routes}/>, document.getElementById('app'));
  };
}
