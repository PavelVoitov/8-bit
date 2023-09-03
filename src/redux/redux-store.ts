import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {ProfileActionsTypes, profileReducer} from "redux/profile-reducer/profile-reducer";
import {MessagesActionType, messagesReducer} from "redux/messages-reducer/messages-reducer";
import {sidebarReducer} from "redux/sidebar-reducer/sidebar-reducer";
import {UsersActionType, usersReducer} from "redux/user-reducer/users-reducer";
import {authReducer} from "redux/auth-reducer/auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, InitializedAppActionType} from "redux/app-reducer/app-reducer";
import createSagaMiddleware from 'redux-saga';
import {authWatcherSagas} from "redux/auth-reducer/auth-sagas";
import {appWatcherSagas} from "redux/app-reducer/app-sagas";
import {profileWatcherSagas} from "redux/profile-reducer/profile-sagas";

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
	yield* appWatcherSagas()
	yield* authWatcherSagas()
	yield* profileWatcherSagas()
}

export type AppActionsType = MessagesActionType | ProfileActionsTypes | UsersActionType | InitializedAppActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, ReducerPropsType, unknown, AppActionsType>

// @ts-ignore
window.store = store