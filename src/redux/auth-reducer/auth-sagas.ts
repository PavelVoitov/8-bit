import {authAPI, AuthUserDataType, CaptchaUrlType, followAPIType, securityAPI} from "api/api";
import {call, put, takeEvery} from "redux-saga/effects";
import {AxiosResponse} from "axios";
import {stopSubmit} from "redux-form";
import {getCaptchaUrlSuccess, setAuthUserData} from "redux/auth-reducer/auth-reducer";


//sagas
export function* logout() {
	const response: AxiosResponse = yield call(authAPI.logout)
	if (response.data.resultCode === 0) {
		yield put(setAuthUserData(null, null, null, false))
	}
}

export function* getCaptchaUrl() {
	const response: AxiosResponse<CaptchaUrlType> = yield call(securityAPI.getCaptchaUrl)
	const captchaUrl = response.data.url
	yield put(getCaptchaUrlSuccess(captchaUrl))
}

export function* getAuthUserData() {
	const data: AuthUserDataType = yield call(authAPI.setAuth)
	if (data.resultCode === 0) {
		let {id, email, login} = data.data
		yield put(setAuthUserData(id, email, login, true))
	}
}

export function* login(action: ReturnType<typeof loginAC>) {
	const {email, password, rememberMe, captcha} = action
	const data: followAPIType = yield call(authAPI.login, email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		//success get auth data
		yield put(getAuthUserDataAC())
	} else {
		if (data.resultCode === 10) {
			yield put(getCaptchaUrlAC())
		}
		let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		yield put(stopSubmit('login', {_error: message}))
	}
}

//action-sagas
export const logoutAC = () => ({type: "auth/LOGOUT-USER"})
export const getCaptchaUrlAC = () => ({type: "auth/GET-CAPTCHA-URL"})
export const getAuthUserDataAC = () => ({type: "auth/SET-USER"})
export const loginAC = (email: string, password: string, rememberMe: boolean, captcha: string) => ({
		type: "auth/USER-LOGIN",
			email,
			password,
			rememberMe,
			captcha
	})

export function* authWatcherSagas() {
	yield takeEvery("auth/LOGOUT-USER", logout)
	yield takeEvery("auth/GET-CAPTCHA-URL", getCaptchaUrl)
	yield takeEvery("auth/SET-USER", getAuthUserData)
	yield takeEvery("auth/USER-LOGIN", login)
}