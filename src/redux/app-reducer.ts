import {getAuthUserDataThunk} from "./auth-reducer";
import {call, put} from "redux-saga/effects";


export type InitializedType = {
    initialized: boolean
}


const initialState: InitializedType = {
    initialized: false
}

type initializedSuccessAT = ReturnType<typeof initializedSuccess>
export type InitializedAppActionType = initializedSuccessAT


export const appReducer = (state: InitializedType = initialState, action: InitializedAppActionType): InitializedType => {
    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'app/INITIALIZED-SUCCESS'} as const)

//saga
export function* initializeApp() {
    yield call(getAuthUserDataThunk)
    yield put(initializedSuccess())
}

export const initializeAppAC = () => (
  {type: 'app/INITIALIZED-APP'}
)


