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


