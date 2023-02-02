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
    posts: Array<PostType>
    // newPostText: string
    status: string
}

const initialState: ProfilePagePropsType = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 17},
    ],
    profile: null,
    status: ''
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
type AddPostAT = ReturnType<typeof addPostAC>
type SetStatus = ReturnType<typeof setStatus>
type DeletePost = ReturnType<typeof deletePost>

export type ProfileActionsTypes = SetUserProfileAT | AddPostAT | SetStatus | DeletePost

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileActionsTypes): ProfilePagePropsType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: Math.random() * 100,
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        case 'DELETE-POST':
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

//actions
export const addPostAC = (newPost: string) => {
    return {
        type: "ADD-POST",
        newPost: newPost
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
export const deletePost = (postId: number) => ({
    type: "DELETE-POST",
    postId
} as const)


//thunks
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

