import React from 'react';
import {Card, Icon, Image} from 'semantic-ui-react'

const BookCard = React.memo(({title, author, price, image}) => {
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
        </Card>
    );
});

export default BookCard;