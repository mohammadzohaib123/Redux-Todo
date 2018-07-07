/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Component/Todo.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import TodoApp from './Store/TodoReducer';
import Todo from './Component/Todo.jsx';
import registerServiceWorker from './registerServiceWorker';
const store = createStore(TodoApp);


ReactDOM.render(<Provider store={store}>
    <Todo />
</Provider>, document.getElementById('root'));
registerServiceWorker();