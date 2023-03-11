import {Dispatch} from "redux";
import {authAPI, securityAPI} from "api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from 'redux';


export type AuthorType = {
	id: string | null
	email: string | null
	login: string | null
	isAuth: boolean
	captchaUrl: string | null
}


const initialState: AuthorType = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	/* then null captcha is not required */
	captchaUrl: null,
}

type setUserDataAT = ReturnType<typeof setAuthUserData>
type GetCaptchaUrlSuccessAT = ReturnType<typeof getCaptchaUrlSuccess>


export type UsersActionType = setUserDataAT | GetCaptchaUrlSuccessAT


export const authReducer = (state: AuthorType = initialState, action: UsersActionType): AuthorType => {
	switch (action.type) {
		case 'auth/SET-USER-DATA':
			return {
				...state,
				...action.data,
			}
		case 'auth/GET-CAPTCHA-URL-SUCCESS':
			return {
				...state,
				captchaUrl: action.captchaUrl
			}
		default:
			return state;
	}
}

//actions
export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: 'auth/SET-USER-DATA',
	data: {id, email, login, isAuth}
} as const)

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
	type: 'auth/GET-CAPTCHA-URL-SUCCESS',
	captchaUrl
} as const)


//thunks
export const getAuthUserDataThunk = () => async (dispatch: Dispatch) => {
	const data = await authAPI.setAuth();
	if (data.resultCode === 0) {
		let {id, email, login} = data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
	const data = await authAPI.login(email, password, rememberMe, captcha)
	if (data.resultCode === 0) {
		//success get auth data
		await dispatch(getAuthUserDataThunk())
	} else {
		if (data.resultCode === 10) {
			await dispatch(getCaptchaUrl())
		}
		let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', {_error: message}))
	}
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
	const response = await securityAPI.getCaptchaUrl()
	const captchaUrl = response.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => {
	return (dispatch: Dispatch) => {
		authAPI.logout()
			.then((data) => {
				if (data.data.resultCode === 0) {
					dispatch(setAuthUserData(null, null, null, false))
				}
			})
	}
}