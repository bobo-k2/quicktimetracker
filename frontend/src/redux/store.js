/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './reducers';

export default createStore(rootReducers, composeWithDevTools());
