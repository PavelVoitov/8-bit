import {ActionsTypes} from "./store";



export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type initialStatePropsType = {
    post: Array<PostType>
    newPostText: string
}

const initialState =  {
    post: [
        {id: 1, message: 'Hello!', likesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 17},
    ],
        newPostText: ''
}


export const profileReducer = (state: initialStatePropsType = initialState, action: ActionsTypes): initialStatePropsType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: Math.random() * 100,
                message: state.newPostText,
                likesCount: 0
            };
            const stateCopy = {...state}
            stateCopy.post.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case 'UPDATE-NEW-POST-TEXT':
            // state.newPostText = action.newText
            return {
                ... state,
                newPostText: action.newText
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