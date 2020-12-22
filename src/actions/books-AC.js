export const setBooks = (books)=> {
    return {
        type: 'SET_BOOKS',
        payload : books
    }
}
export const addBook = (book)=> {
    return {
        type: 'ADD_BOOKS',
        payload : book
    }
}