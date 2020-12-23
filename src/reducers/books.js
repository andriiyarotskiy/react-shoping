export const booksReducer = (state , action) => {
    switch (action.type) {
        case 'SET_BOOKS': {
            return {
                ...state,
                items: action.payload,
                isReady: true
            }
        }
        case 'SET_IS_READY': {
            return {
                ...state,
                isReady: action.payload
            }
        }
        default :
            return state
    }
}