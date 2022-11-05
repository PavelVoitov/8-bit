import {ActionsTypes, PostType} from "./store";

const initialState =  {
    post: [
        {id: 1, message: 'Hello!', likesCount: 2},
        {id: 2, message: 'How are you?', likesCount: 17},
    ],
        newPostText: ''
}


export const profileReducer = (state: {
    post: Array<PostType>
    newPostText: string
} = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: Math.random() * 100,
                message: state.newPostText,
                likesCount: 0
            };
            state.post.push(newPost)
            state.newPostText = ''
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state
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