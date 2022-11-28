
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
}

const initialState: ProfilePagePropsType =  {
    profile: null,
    post: [
        {id: 1, message: 'Hello!', likesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 17},
    ],
        newPostText: ''
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
type UpdateNewPostTextAT = ReturnType<typeof updateNewPostTextAC>
type AddPostAT = ReturnType<typeof addPostAC>

type ProfileActionsTypes =  SetUserProfileAT | UpdateNewPostTextAT | AddPostAT

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
                ... state,
                newPostText: action.newText
            }
            case 'SET-USER-PROFILE':
            return {
                ... state,
               profile: action.profile
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

export const setUserProfile = (profile: ProfilePropsType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}