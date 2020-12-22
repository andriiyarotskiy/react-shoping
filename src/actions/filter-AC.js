export const setFilter = (filter)=> {
    return {
        type: 'SET_FILTER',
        payload : filter
    }
}
export const setSearchQuery = (value)=> {
    return {
        type: 'SET_QUERY',
        payload : value
    }
}