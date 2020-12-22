import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../actions/cart-AC";

const BookCard = React.memo(({title, author, price, image, ...props}) => {
    const book = {title, author, price, image, ...props}
    const dispatch = useDispatch()

    const addedCount = useSelector(state => state.cart.items.reduce((count, items) =>
        count + (items.id === props.id ? 1 : 0), 0))

    const addOnClick = () => {
        dispatch(addToCart(book))
    }

    return (
        <Card>
            <Image src={image} size="medium" wrapped/>
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <a href="value">
                    <Icon name='euro'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addOnClick}>{addedCount > 0 ? `In the Cart (${addedCount})` : `Add to cart`}</Button>
        </Card>
    );
});

export default BookCard;