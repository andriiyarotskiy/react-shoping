export const addToCart = (obj)=> {
    return {
        type: 'ADD_TO_CART',
        payload : obj
    }
}
export const removeFromCart = (id)=> {
    return {
        type: 'REMOVE_FROM_CART',
        payload : id
    }
}