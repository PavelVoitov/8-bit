import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type ProfilePropsType = {
    "userId": number
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "contacts": {
        "github": string
        "vk": string
        "facebook": string
        "instagram": string
        "twitter": string
        "website": string
        "youtube": string
        "mainLink": string
    }
    "photos": {
        "small": string
        "large": string
    }
} | null

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePagePropsType = {
    profile: ProfilePropsType
    post: Array<PostType>
    newPostText: string
    status: string
}

const initialState: ProfilePagePropsType = {
    post: [
        {id: 1, message: 'Hello!', likesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 17},
    ],
    newPostText: '',
    profile: null,
    status: ''
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
type AddPostAT = ReturnType<typeof addPostAC>
type SetStatus = ReturnType<typeof setStatus>

type ProfileActionsTypes = SetUserProfileAT | UpdateNewPostTextAT | AddPostAT | SetStatus

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileActionsTypes): ProfilePagePropsType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: Math.random() * 100,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                post: [...state.post, newPost]
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost: newPost
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}

export const setUserProfile = (profile: ProfilePropsType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getProfile(userId)
            .then((data) => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(status)
            .then((data) => {
                dispatch(setStatus(data.data))
            })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then((data) => {
                if (data.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }
}