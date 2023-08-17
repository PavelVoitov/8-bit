import {call, put, takeEvery} from "redux-saga/effects";
import {getAuthUserData} from "redux/auth-sagas";
import {initializedSuccess} from "redux/app-reducer";

//saga
export function* initializeApp() {
	yield call(getAuthUserData)
	yield put(initializedSuccess())
}

//action-saga
export const initializeAppAC = () => (
	{type: 'app/INITIALIZED-APP'}
)

export function* appWatcherSagas() {
	yield takeEvery('app/INITIALIZED-APP', initializeApp)
}
