import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/store";
import {Provider} from "./StoreContext";


export const _callSubscriber = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    // store={store} dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


_callSubscriber(store.getState())

store.subscribe(() => {
    let state = store.getState()
    _callSubscriber(state)
})