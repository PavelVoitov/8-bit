import {initializeApp} from "redux/app-reducer/app-sagas";
import {call, put} from "redux-saga/effects";
import {getAuthUserData} from "redux/auth-reducer/auth-sagas";
import {initializedSuccess} from "redux/app-reducer/app-reducer";

test('initializeApp', () => {
	const gen = initializeApp()
	expect(gen.next().value).toEqual(call(getAuthUserData))
	expect(gen.next().value).toEqual(put(initializedSuccess()))
})