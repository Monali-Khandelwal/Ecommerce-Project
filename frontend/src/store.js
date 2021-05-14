import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import {cartReducer} from './reducers/cartReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = {cart: {cartItems}};
// reducer is a function which gets state and action and retruns a new state based on the action

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;