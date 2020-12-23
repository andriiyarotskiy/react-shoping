import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import './app.css';
import ContextProvider from "./ContextProvider/ContextProvider";

ReactDOM.render(
        <ContextProvider>
            <App/>
        </ContextProvider>,
    document.getElementById('root')
);

