import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';

const initialState = {};
// reducer is a function which gets state and action and retruns a new state based on the action

const reducer = combineReducers({
    productList: productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;