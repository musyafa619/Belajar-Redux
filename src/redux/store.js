import reducer from './reducer';
import { createStore } from 'redux';

const initialState = [];

const store = createStore(reducer);

export default store;
