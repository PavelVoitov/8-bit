export type UserType = {
    "name": string,
    "id": number,
    "uniqueUrlName": null,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
}


export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


const initialState: UsersType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

}

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
type setIsFetchingAT = ReturnType<typeof setIsFetchingAC>

export type UsersActionType = FollowAT
                            | UnfollowAT
                            | SetUsersAT
                            | setCurrentPageAT
                            | setTotalUsersCountAT
                            | setIsFetchingAT

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
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...users, currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...users,
                totalUsersCount: action.totalCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...users,
                isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount
    } as const
}
export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}