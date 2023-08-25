import {followAPIType, usersAPI} from "api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "utils/object-helpers";

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

type FollowAT = ReturnType<typeof followSuccess>
type UnfollowAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type setCurrentPageAT = ReturnType<typeof setCurrentPage>
type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type setIsFetchingAT = ReturnType<typeof setIsFetching>
type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export type UsersActionType =
	| FollowAT
	| UnfollowAT
	| SetUsersAT
	| setCurrentPageAT
	| setTotalUsersCountAT
	| setIsFetchingAT
	| toggleFollowingProgressAT

const initialState: UsersType = {
	users: [] as Array<UserType>,
	pageSize: 32,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: false,
	followingInProgress: []
}
export const usersReducer = (users: UsersType = initialState, action: UsersActionType): UsersType => {

	switch (action.type) {
		case 'FOLLOW':
			return {
				...users, users: updateObjectInArray(users.users, action.id, "id", {followed: true})
			}
		case 'UNFOLLOW':
			return {
				...users, users: updateObjectInArray(users.users, action.id, "id", {followed: false})
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
					: users.followingInProgress.filter(id => id !== action.userId)
			}
		default:
			return users;
	}
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: (userId: number) => Promise<followAPIType>, actionCreator: Function) => {
	dispatch(toggleFollowingProgress(true, userId))
	const data = await apiMethod(userId)
	if (data.resultCode === 0) {
		dispatch(actionCreator(userId))
	}
	dispatch(toggleFollowingProgress(false, userId))
}

//actions
export const followSuccess = (id: number) => ({
	type: "FOLLOW",
	id
} as const)
export const unfollowSuccess = (id: number) => ({
	type: "UNFOLLOW",
	id
} as const)
export const setUsers = (users: Array<UserType>) => ({
	type: "SET-USERS",
	users
} as const)
export const setCurrentPage = (currentPage: number) => ({
	type: "SET-CURRENT-PAGE",
	currentPage
} as const)
export const setTotalUsersCount = (totalCount: number) => ({
	type: "SET-TOTAL-USERS-COUNT",
	totalCount
} as const)
export const setIsFetching = (isFetching: boolean) => ({
	type: "TOGGLE-IS-FETCHING",
	isFetching
} as const)
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
	type: "TOGGLE-IS-FOLLOWING-PROGRESS",
	isFetching,
	userId
} as const)

//thunks
export const requestUsers = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
	dispatch(setIsFetching(true))
	dispatch(setCurrentPage(page))
	const data = await usersAPI.getUsers(page, pageSize)
	dispatch(setIsFetching(false))
	dispatch(setUsers(data.items))
	dispatch(setTotalUsersCount(data.totalCount))
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
	await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
	await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}