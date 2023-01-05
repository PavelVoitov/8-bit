import {AnyAction} from "redux";
import {getAuthUserDataThunk} from "./auth-reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppThunk} from "./redux-store";


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
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED-SUCCESS'} as const)

export const initializeApp = (): AppThunk => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    const promise = dispatch(getAuthUserDataThunk())
    promise.then(() => {
        dispatch(initializedSuccess())
    })

}

