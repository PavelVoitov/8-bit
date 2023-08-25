import {initializeApp} from "redux/app-reducer/app-sagas";
import {call} from "redux-saga/effects";
import {getAuthUserData} from "redux/auth-reducer/auth-sagas";

test('initializeApp', () => {
	const gen = initializeApp()
	const result = gen.next()
	expect(result.value).toEqual(call(getAuthUserData))

})