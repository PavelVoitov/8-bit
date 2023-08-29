import {getAuthUserData, getAuthUserDataAC, getCaptchaUrl, login, loginAC, logout} from "redux/auth-reducer/auth-sagas";
import {call, put} from "redux-saga/effects";
import {authAPI, AuthUserDataType, CaptchaUrlType, securityAPI} from "api/api";
import {getCaptchaUrlSuccess, setAuthUserData} from "redux/auth-reducer/auth-reducer";
import {stopSubmit} from "redux-form";

let ResponseAuthUserDataType: AuthUserDataType;

beforeEach(() => {
	ResponseAuthUserDataType = {
		resultCode: 0,
		messages: [],
		data: {
			id: '',
			email: '',
			login: ''
		}
	}
})

test('getAuthUserData with success resultCode equal 0', () => {
	const gen = getAuthUserData()
	expect(gen.next().value).toEqual(call(authAPI.setAuth))


	if (ResponseAuthUserDataType.resultCode === 0) {
		expect(gen.next(ResponseAuthUserDataType).value).toEqual(put(setAuthUserData(ResponseAuthUserDataType.data.id, ResponseAuthUserDataType.data.email, ResponseAuthUserDataType.data.login, true)))
	}
})

test('getAuthUserData with not a success resultCode equal 1', () => {
	const gen = getAuthUserData()
	expect(gen.next().value).toEqual(call(authAPI.setAuth))

	ResponseAuthUserDataType.resultCode = 1

	if (ResponseAuthUserDataType.resultCode !== 0) {
		expect(gen.next(ResponseAuthUserDataType).value).toEqual(put(setAuthUserData(ResponseAuthUserDataType.data.id, ResponseAuthUserDataType.data.email, ResponseAuthUserDataType.data.login, false)))
	}
})

test('logout', () => {
	const gen = logout()
	expect(gen.next().value).toEqual(call(authAPI.logout))
	if (ResponseAuthUserDataType.resultCode === 0) {
		expect(gen.next(ResponseAuthUserDataType).value).toEqual(put(setAuthUserData(null, null, null, false)))
	}
})

test('getCaptchaUrl', () => {
	const gen = getCaptchaUrl()
	expect(gen.next().value).toEqual(call(securityAPI.getCaptchaUrl))

	const responseCaptchaUrl: CaptchaUrlType = {url: ''}
	expect(gen.next(responseCaptchaUrl).value).toEqual(put(getCaptchaUrlSuccess(responseCaptchaUrl.url)))
})

test('login success', () => {
	const request: ReturnType<typeof loginAC> = {
		email: 'test@test.mail',
		password: '123',
		rememberMe: true,
		captcha: '',
		type: "auth/USER-LOGIN",
	}
	const gen = login(request)
	expect(gen.next().value).toEqual(call(authAPI.login, request.email, request.password, request.rememberMe, request.captcha))
	if (ResponseAuthUserDataType.resultCode === 0) {
		expect(gen.next(ResponseAuthUserDataType).value).toEqual(put(getAuthUserDataAC()))
	}
})

test('login not a success', () => {
	const request: ReturnType<typeof loginAC> = {
		email: 'test@test.mail',
		password: '123',
		rememberMe: true,
		captcha: '',
		type: "auth/USER-LOGIN",
	}
	const gen = login(request)
	expect(gen.next().value).toEqual(call(authAPI.login, request.email, request.password, request.rememberMe, request.captcha))
	if (ResponseAuthUserDataType.resultCode === 10) {
		expect(gen.next(ResponseAuthUserDataType).value).toEqual(put(getAuthUserDataAC()))
		const messageError: string = 'Some error'
		expect(gen.next().value).toEqual(put(stopSubmit('login', {_error: messageError})))
	}
})

