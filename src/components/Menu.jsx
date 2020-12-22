import React from 'react';
import {Icon, Menu, List, Button, Image, Popup} from 'semantic-ui-react';
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash'
import {removeFromCart} from "../actions/cart-AC";



const CartComponent = ({title, id, image, ...props})=> {
    const dispatch = useDispatch()
    return (
        <List selection verticalAlign='middle'>
            <List.Item>
                <List.Content floated='right'>
                    <Button onClick={()=> dispatch(removeFromCart(id))} color="red">Remove</Button>
                </List.Content>
                <Image avatar src={image}/>
                <List.Content>{title}</List.Content>
            </List.Item>
        </List>
    )
}


const NavBar = React.memo(() => {

    const totalPrice = useSelector(state => state.cart.items.reduce((total, book) =>
        (total + book.price), 0)
    )
    const items = useSelector(state => state.cart.items)

    const uniqId = _.uniqBy(items, o => o.id)

    return (
        <Menu>
            <Menu.Item name='browse' onClick={() => {}}>
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
                    position='bottom right'
                    flowing hoverable
                    trigger={
                        <Menu.Item name="help" onClick={()=>{}}>
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