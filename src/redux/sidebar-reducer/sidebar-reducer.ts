import borisAvatar from 'assets/images/boris-avatar.png'

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

const initialState = {
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
            avatar: borisAvatar
        },
    ]
}

type SidebarActionType = {}

export const sidebarReducer = (state: { friends: Array<FriendsType> } = initialState, action: SidebarActionType) => {
    return state;
}