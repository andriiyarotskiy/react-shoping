import React, {useReducer, useContext} from 'react';
import {booksReducer} from "../reducers/books";
import {filterReducer} from "../reducers/filter";
import {cartReducer} from "../reducers/cart";


const ContextApp = React.createContext()
// Селект контекста
export const useSelectCtxt = () => {
    return useContext(ContextApp)
}


const ContextProvider = ({children}) => {
    //booksReducer
    const [books, dispatch] = useReducer(booksReducer, {
        items: null,
        isReady: false,
    });
    //filterReducer
    const [filter, dispatchFilter] = useReducer(filterReducer, {
        searchQuery: '',
        filterBy: 'all'
    });
    //cartReducer
    const [cart, dispatchCart] = useReducer(cartReducer, {items: []});


    return (
        <ContextApp.Provider value={{
            books, dispatch,
            filter, dispatchFilter,
            cart, dispatchCart
        }}>
            {children}
        </ContextApp.Provider>
    );
};

export default ContextProvider;