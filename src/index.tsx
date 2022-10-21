import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";


export const _callSubscriber = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

_callSubscriber()

store.subscribe(_callSubscriber)