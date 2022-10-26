import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type ReducersPropsType = ReturnType<typeof reducers>

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
})

export const store: Store<ReducersPropsType> = createStore(reducers)
