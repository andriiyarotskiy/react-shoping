import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from "react-redux";
import {setBooks} from "./actions/books-AC";
import NavBar from "./components/Menu";
import {Card, Container} from "semantic-ui-react";
import BookCard from "./components/BookCard";
import Filter from "./components/Filter";
import _ from 'lodash';
import {setFilter, setSearchQuery} from "./actions/filter-AC";

//Sort Function
const sortBy = (arr, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return _.orderBy(arr, 'price', 'desc')
        case 'price_low':
            return _.orderBy(arr, 'price', 'asc')
        case 'author':
            return _.orderBy(arr, 'author', 'asc')
        default :
            return arr
    }
}
// Фильтрация массива по полю search
const filterFunc = (arr, searchValue) => {
    return arr.filter(el => {
        return el.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
            el.author.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    });
}

const App = () => {
    const isReady = useSelector(state => state.books.isReady)
    const items = useSelector(state => state.books.items)
    const {filterBy, searchQuery} = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const [booksLocal, setBooksLocal] = useState([])

    //Fetch data from api
    useEffect(() => {
        axios.get('/books.json').then(res => {
            dispatch(setBooks(res.data))
            setBooksLocal(res.data)
        })
    }, [dispatch])


    useEffect(() => {
        // Сортировка по filterBy
        const sortedBooks = sortBy(booksLocal, filterBy)
        if (!searchQuery) {
            dispatch(setBooks(sortedBooks))
        } else {
            const filteredBooks = filterFunc(sortedBooks, searchQuery)
            dispatch(setBooks(filteredBooks))
        }
        // Фильтрация сортированного массива


    }, [dispatch, booksLocal, searchQuery, filterBy])


    const onChangeHandler = (e) => {
        let searchValue = e.currentTarget.value
        dispatch(setSearchQuery(searchValue))
        const filteredBooks = filterFunc(items, searchValue)
        dispatch(setBooks(filteredBooks))
    }

    //SORT // Сортировка на клик по полям
    const handleItemClick = (e, {name}) => {
        const sortedBooks = sortBy(items, name)
        dispatch(setFilter(name))
        dispatch(setBooks(sortedBooks))
    }
    //SORT


    return (
        <Container>
            <NavBar/>
            <Filter filterBy={filterBy}
                    handleItemClick={handleItemClick}
                    onChangeHandler={onChangeHandler}
            />
            <Card.Group itemsPerRow={4}>
                {!isReady ? 'Loading...' : items.map(book => (
                    <BookCard key={book.id} {...book}/>
                ))}
            </Card.Group>
        </Container>
    );
}

export default App;