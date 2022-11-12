export type UserType = {
    id: number
    fotoUrl: string
    followed: boolean,
    fullName: string
    status: string,
    location: {
        city: string,
        country: string
    }
}

export type UsersType = {
    users: Array<UserType>
}

const initialState : UsersType = {
    users: [
        // {
        //     id: 1,
        //     fotoUrl: 'https://image.api.playstation.com/cdn/UP4040/NPUB30943_00/XDd5XeDsvc7fxvTTiCjW9SMvI18fUBqn.png',
        //     followed: true,
        //     fullName: 'Dima',
        //     status: "I'm reach",
        //     location: {city: 'Novopolock', country: 'Belarus'}
        // },
        // {
        //     id: 2,
        //     fotoUrl: 'https://image.api.playstation.com/cdn/UP0102/BLUS30453_00/PdAJIYYdTFZ8UHh1jtw7Y1qSs5kMh7B4.png',
        //     followed: false,
        //     fullName: 'Senya',
        //     status: "I'm stupid",
        //     location: {city: 'Swily', country: 'Belarus'}
        // },
        // {
        //     id: 3,
        //     fotoUrl: 'https://avatars.cloudflare.steamstatic.com/04affbbc83f64433daef59fe38d61141615ad901_full.jpg',
        //     followed: false,
        //     fullName: 'Dina',
        //     status: "I'm beach",
        //     location: {city: 'Vitebsk', country: 'Belarus'}
        // },
        // {
        //     id: 4,
        //     fotoUrl: 'https://image.api.playstation.com/cdn/UP0102/BLUS30793_00/clGie1A7zDuwwnjKRqkgQw6pddGzhSsz.png',
        //     followed: false,
        //     fullName: 'Ignat',
        //     status: "I'm gamer",
        //     location: {city: 'Mohilew', country: 'Belarus'}
        // },

    ],
}

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

export type UsersActionType = FollowAT | UnfollowAT | SetUsersAT
export const usersReducer = (users: UsersType = initialState, action: UsersActionType): UsersType => {

    switch (action.type) {
        case 'FOLLOW':
            return {
                ...users,
                users: users.users.map(el => {
                    return el.id === action.id ? {...el, followed: true} : el
                })
            }
        case 'UNFOLLOW':
            return {
                ...users,
                users: users.users.map(el => {
                    return el.id === action.id ? {...el, followed: false} : el
                })
            }
        case 'SET-USERS':
            return {
                ...users,
                users: [...users.users, ...action.users]
            }


        default:
            return users;
    }
}

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}