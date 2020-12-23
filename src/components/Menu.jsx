import React from 'react';
import {Button, Icon, Image, List, Menu, Popup} from 'semantic-ui-react';
import _ from 'lodash'
import {removeFromCart} from "../actions/cart-AC";
import {useSelectCtxt} from "../ContextProvider/ContextProvider";


const CartComponent = ({title, id, image, ...props}) => {

    const state = useSelectCtxt()
    const dispatchCart = state.dispatchCart

    return (
        <List selection verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={() => dispatchCart(removeFromCart(id))} color="red">Remove</Button>
                </List.Content>
                <Image avatar src={image}/>
                <List.Content>{title}</List.Content>
            </List.Item>
        </List>
    )
}


const NavBar = React.memo(() => {

    const state = useSelectCtxt()

    const {items} = state.cart

    const totalPrice = items.reduce((total, book) => (total + book.price), 0)

    const uniqId = _.uniqBy(items, o => o.id)

    return (
        <Menu>
            <Menu.Item name='browse' onClick={() => {
            }}>
                Books store
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    onClick={() => {
                    }}
                >
                    Total: &nbsp; <b>{totalPrice}</b> &nbsp;<Icon name='euro'/>
                </Menu.Item>
                <Popup
                    disabled={!!(uniqId.length < 1)}
                    position='bottom right'
                    flowing hoverable
                    trigger={
                        <Menu.Item name="help" onClick={() => {
                        }}>
                            Cart (<b> {items.length} </b>)
                        </Menu.Item>
                    }
                    content={uniqId.map(b => <CartComponent key={b.id} {...b}/>)}
                    on="click"
                    hideOnScroll
                />
            </Menu.Menu>
        </Menu>
    );
})

export default NavBar;