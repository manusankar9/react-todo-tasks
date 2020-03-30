import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
import myreducers from './React-redux-todo/Reducers'
import dropDownReducer from './DropDown/Reducer'

let store = createStore(combineReducers({
    app:myreducers,
    dropDown:dropDownReducer
}))

render(<Provider store = {store}>
    <App />
    </Provider>,document.getElementById('root'));
