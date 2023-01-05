import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import { AnyAction } from 'redux';


export type AuthorType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState: AuthorType = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}

type setUserDataAT = ReturnType<typeof setAuthUserData>


export type UsersActionType = setUserDataAT


export const authReducer = (state: AuthorType = initialState, action: UsersActionType): AuthorType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        data: {id, email, login, isAuth}
    } as const
}

export const getAuthUserDataThunk = () => {
    return (dispatch: Dispatch) => {
      return authAPI.setAuth()
            .then((data) => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
        authAPI.login(email, password, rememberMe)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserDataThunk())
                } else {
                    let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
                    console.log(data.messages[0])
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
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