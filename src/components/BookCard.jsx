import React from 'react';
import {Button, Card, Icon, Image} from 'semantic-ui-react'
import {addToCart} from "../actions/cart-AC";
import {useSelectCtxt} from "../ContextProvider/ContextProvider";

const BookCard = React.memo(({title, author, price, image, ...props}) => {
    const book = {title, author, price, image, ...props}

    const state = useSelectCtxt()
    const addedCount = state.cart.items.reduce((count, items) =>
        count + (items.id === props.id ? 1 : 0), 0)

    const dispatchCart = state.dispatchCart

    const addOnClick = () => {
        dispatchCart(addToCart(book))
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