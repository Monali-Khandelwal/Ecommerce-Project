import {createStore, combineReducers} from 'redux';

const intitialState = {};
// reducer is a function which gets state and action and retruns a new state based on the action
const reducer = combineReducers({

    productList: productListReducer,
})
const store = createStore(reducer, initialState);