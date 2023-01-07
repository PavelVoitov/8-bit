import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

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
    followingInProgress: Array<number>
}


const initialState: UsersType = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

}

type FollowAT = ReturnType<typeof followSuccess>
type UnfollowAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type setIsFetchingAT = ReturnType<typeof setIsFetching>
type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export type UsersActionType = FollowAT
    | UnfollowAT
    | SetUsersAT
    | setCurrentPageAT
    | setTotalUsersCountAT
    | setIsFetchingAT
    | toggleFollowingProgressAT

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
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...users,
                followingInProgress: action.isFetching ?
                    [...users.followingInProgress, action.userId]
                    : users.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return users;
    }
}

export const followSuccess = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowSuccess = (id: number) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalCount
    } as const
}
export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}

export const requestUsers = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        dispatch(setCurrentPage(page))

        usersAPI.getUsers(page, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}