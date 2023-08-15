import {combineReducers, legacy_createStore, applyMiddleware, compose} from "redux";
import {ProfileActionsTypes, profileReducer} from "./profile-reducer";
import {MessagesActionType, messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {UsersActionType, usersReducer} from "./users-reducer";
import {authReducer, logout} from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, initializeApp, InitializedAppActionType} from "./app-reducer";
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';

export type ReducerPropsType = ReturnType<typeof reducers>

const reducers = combineReducers({
	profilePage: profileReducer,
	messagesPage: messagesReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	form: formReducer
})

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(reducers, composeEnhancers(
	applyMiddleware(thunkMiddleware, sagaMiddleware)
))

sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
	yield takeEvery('app/INITIALIZED-APP', initializeApp)
	yield takeEvery("auth/LOGOUT-USER", logout)
}

export type AppActionsType = MessagesActionType | ProfileActionsTypes | UsersActionType | InitializedAppActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReducerPropsType, unknown, AppActionsType>

// @ts-ignore
window.store = store