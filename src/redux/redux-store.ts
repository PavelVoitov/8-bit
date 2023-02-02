import {combineReducers, legacy_createStore, Store, applyMiddleware} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {MessagesActionType, messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer, InitializedAppActionType} from "./app-reducer";

export type ReducerPropsType = ReturnType<typeof reducer>

const reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app :appReducer,
    form: formReducer
})

export const store: Store<ReducerPropsType> = legacy_createStore(reducer, applyMiddleware(thunkMiddleware))

export type AppActionsType = MessagesActionType | ProfileActionsTypes | UsersActionType | InitializedAppActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReducerPropsType, unknown, AppActionsType>

// @ts-ignore
window.store = store