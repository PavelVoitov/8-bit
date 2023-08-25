import {getAuthUserData} from "redux/auth-reducer/auth-sagas";
import {call, put} from "redux-saga/effects";
import {authAPI, AuthUserDataType} from "api/api";
import {setAuthUserData} from "redux/auth-reducer/auth-reducer";

test('getAuthUserData', () => {
	const gen = getAuthUserData()
	let result = gen.next()
	expect(result.value).toEqual(call(authAPI.setAuth))
	const ResponseAuthUserDataType: AuthUserDataType = {
		resultCode: 0,
		messages: [],
		data: {
			id: '',
			email: '',
			login: ''
		}
	}
	result = gen.next(ResponseAuthUserDataType)
	expect(result.value).toEqual(put(setAuthUserData(ResponseAuthUserDataType.data.id, ResponseAuthUserDataType.data.email, ResponseAuthUserDataType.data.login, true)))

})