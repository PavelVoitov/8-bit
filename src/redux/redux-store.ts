import {combineReducers, legacy_createStore, Store, applyMiddleware} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

export type ReducerPropsType = ReturnType<typeof reducer>

const reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


export const store: Store<ReducerPropsType> = legacy_createStore(reducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store