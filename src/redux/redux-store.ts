import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";

export type ReducerPropsType = ReturnType<typeof reducer>

const reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store: Store<ReducerPropsType> = createStore(reducer)
