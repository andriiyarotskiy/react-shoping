import React from 'react';
import {Input, Menu} from 'semantic-ui-react'
import {useSelector} from "react-redux";

const Filter = React.memo(({filterBy, handleItemClick,onChangeHandler}) => {
    const searchQuery = useSelector(state => state.filter.searchQuery)


    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={filterBy === 'all'}
                onClick={handleItemClick}
            >All</Menu.Item>
            <Menu.Item
                name='price_high'
                active={filterBy === 'price_high'}
                onClick={handleItemClick}
            >Price (more expensive)</Menu.Item>
            <Menu.Item
                name='price_low'
                active={filterBy === 'price_low'}
                onClick={handleItemClick}
            >Price (inexpensive)</Menu.Item>
            <Menu.Item
                name='author'
                active={filterBy === 'author'}
                onClick={handleItemClick}
            >Author</Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input
                        icon='search'
                        value={searchQuery}
                        onChange={onChangeHandler}
                        placeholder='Search...'
                    />
                    {/*<button onClick={onSearch}>search</button>*/}
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
});

export default Filter;