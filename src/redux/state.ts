export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

export type MessageType = {
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
    }
    messagesPage: {
        dialogs: Array<DialogType>
        messages: Array<MessageType>
    }
    sidebar: {
        friends: Array<FriendsType>
    }

}

export const state : StateType = {
    profilePage: {
        post: [
            {id: 1, message: 'Hello!', likesCount: 2},
            {id: 1, message: 'How are you?', likesCount: 17},
        ],
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Andrew", avatar: 'https://avatarfiles.alphacoders.com/805/thumb-80545.jpg'},
            {id: 2, name: "Sasha", avatar: 'https://i.pinimg.com/1200x/3b/47/46/3b4746abc4c434aa915f0cd5bd3139e7.jpg'},
            {id: 3, name: "Boris", avatar: 'https://avatarfiles.alphacoders.com/111/111588.jpg'},
            {id: 4, name: "Dima", avatar: 'https://kmesh.io/img/lists/97/avatar-10-ways-being-non-bender-is-actually-better-than-being-bender.jpg'},
            {id: 5, name: "Tanya", avatar: 'https://crosti.ru/users/00/01/5b/55a53fe165/avatar.jpg'}
        ],
        messages: [
            {id: 1, message: 'Hello!', sender: 'I'},
            {id: 2, message: 'How are you?', sender: 'user'},
            {id: 3, message: "I\'m fine. And you?", sender: 'I' },
            {id: 4, message: 'Fine thanks. How is weather today in your city?', sender: 'user'},
            {id: 5, message: 'It\'s rainy today.', sender: 'I'},
            {id: 6, message: 'What are you doing?', sender: 'user'},
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: "Andrew", avatar: 'https://avatarfiles.alphacoders.com/805/thumb-80545.jpg'},
            {id: 2, name: "Sasha", avatar: 'https://i.pinimg.com/1200x/3b/47/46/3b4746abc4c434aa915f0cd5bd3139e7.jpg'},
            {id: 3, name: "Boris", avatar: 'https://avatarfiles.alphacoders.com/111/111588.jpg'},
        ]
    }
}