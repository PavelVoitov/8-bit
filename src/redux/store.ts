import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {messagesReducer, sendMessageAC, updateNewMessageAC} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

 type PostType = {
    id: number
    message: string
    likesCount: number
}
 type DialogType = {
    id: number
    name: string
    avatar: string
}

 type MessageType = {
    id: number
    message: string
    sender: string
}

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

export type StateType = {
    profilePage: {
        post: Array<PostType>
        newPostText: string
    }
    messagesPage: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
        newMessage: string
    }
    sidebar: {
        friends: Array<FriendsType>
    }

}

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageAC>

export type StoreType = {
    _state: StateType
    subscribe: (callback: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hello!', likesCount: 2},
                {id: 2, message: 'How are you?', likesCount: 17},
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: "Andrew", avatar: 'https://avatarfiles.alphacoders.com/805/thumb-80545.jpg'},
                {
                    id: 2,
                    name: "Sasha",
                    avatar: 'https://i.pinimg.com/1200x/3b/47/46/3b4746abc4c434aa915f0cd5bd3139e7.jpg'
                },
                {id: 3, name: "Boris", avatar: 'https://avatarfiles.alphacoders.com/111/111588.jpg'},
                {
                    id: 4,
                    name: "Dima",
                    avatar: 'https://kmesh.io/img/lists/97/avatar-10-ways-being-non-bender-is-actually-better-than-being-bender.jpg'
                },
                {id: 5, name: "Tanya", avatar: 'https://crosti.ru/users/00/01/5b/55a53fe165/avatar.jpg'}
            ],
            messages: [
                {id: 1, message: 'Hello!', sender: 'I'},
                {id: 2, message: 'How are you?', sender: 'user'},
                {id: 3, message: "I\'m fine. And you?", sender: 'I'},
                {id: 4, message: 'Fine thanks. How is weather today in your city?', sender: 'user'},
                {id: 5, message: 'It\'s rainy today.', sender: 'I'},
                {id: 6, message: 'What are you doing?', sender: 'user'},
            ],
            newMessage: ''
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Andrew",
                    avatar: 'https://avatarfiles.alphacoders.com/805/thumb-80545.jpg'
                },
                {
                    id: 2,
                    name: "Sasha",
                    avatar: 'https://i.pinimg.com/1200x/3b/47/46/3b4746abc4c434aa915f0cd5bd3139e7.jpg'
                },
                {
                    id: 3,
                    name: "Boris",
                    avatar: 'https://avatarfiles.alphacoders.com/111/111588.jpg'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log(
            'Not changes'
        )
    },

    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()

        // if (action.type === "ADD-POST") {
        //     const newPost: PostType = {
        //         id: Math.random() * 100,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.post.push(newPost)
        //     this._state.profilePage.newPostText = ''
        //     this._callSubscriber()
        // } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        //     this._state.profilePage.newPostText = action.newText
        //     this._callSubscriber()
        // } else if (action.type === "SEND-MESSAGE") {
        //     const newMessage: MessageType = {
        //         id: Math.random(),
        //         message: this._state.messagesPage.newMessage,
        //         sender: 'I'
        //     }
        //     this._state.messagesPage.messages.push(newMessage)
        //     this._state.messagesPage.newMessage = ''
        //     this._callSubscriber()
        // } else if (action.type === "UPDATE-NEW-MESSAGE") {
        //     this._state.messagesPage.newMessage = action.newText
        //     this._callSubscriber()
        // }
    }
}





// @ts-ignore
window.store = store

