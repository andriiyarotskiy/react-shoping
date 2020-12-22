import {applyMiddleware, combineReducers, createStore} from "redux";
import ThunkMiddleware from 'redux-thunk'
import {booksReducer} from "./reducers/books";
import {cartReducer} from "./reducers/cart";
import {logger} from "redux-logger";
import {filterReducer} from "./reducers/filter";

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer,
    filter: filterReducer
})

export const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger))

// window.store = store
console.log(store.getState())