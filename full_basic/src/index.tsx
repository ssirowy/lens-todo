import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import LensTodo from './LensTodo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <LensTodo />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
