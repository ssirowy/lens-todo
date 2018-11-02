import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker'

// Our top level app component
import { LensTodo } from './components/LensTodo'

// Redux stuff
import { Provider } from 'react-redux'
import {
  combineReducers,
  createStore
} from 'redux'
import * as reducers from './utils/reducers'

import { todoFromStr } from './utils/todo_utils'

// App store
const appReducers = combineReducers(reducers)


const defaultState = {
  showCompleted: false,
  todos: [
    todoFromStr('Install base app'),
    todoFromStr('Familiarize yourself with lens.looker.com'),
    todoFromStr('List todos'),
    todoFromStr('Create new todos'),
    todoFromStr('Complete todos'),
    todoFromStr('Filter todos'),
    todoFromStr('State management?'),
    todoFromStr('💰Profit'),
  ]
}

const store = createStore(appReducers, defaultState)

ReactDOM.render(
  <Provider store={store}>
    <LensTodo />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
