import React from 'react';
import {Menu} from 'semantic-ui-react';


const NavBar = React.memo(() => {
    return (
        <Menu>
            <Menu.Item
                name='browse'
                onClick={() => {
                }}
            >
                Books store
            </Menu.Item>

            <Menu.Menu position='right'>
                <Menu.Item
                    name='signup'
                    onClick={() => {
                    }}
                >
                    Total: &nbsp; <b>0</b>
                </Menu.Item>

                <Menu.Item
                    name='help'
                    onClick={() => {
                    }}
                >
                    Cart (<b> 0 </b>)
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
})

export default NavBar;