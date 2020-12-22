const initialState = {
    items: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            return {...state, items: [...state.items, action.payload]}
        }
        case 'REMOVE_FROM_CART': {
            return {...state,
                items: state.items.filter(el => el.id !== action.payload)}
        }
        default :
            return state
    }
}