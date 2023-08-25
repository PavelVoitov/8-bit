import {
	followSuccess,
	setCurrentPage,
	setTotalUsersCount,
	toggleFollowingProgress,
	unfollowSuccess,
	usersReducer,
	UsersType
} from "redux/user-reducer/users-reducer";

let state: UsersType;

beforeEach(() => {
	state = {
		users: [
			{
				"name": 'Petr',
				"id": 0,
				"uniqueUrlName": null,
				"photos": {
					"small": null,
					"large": null
				},
				"status": null,
				"followed": false
			},
			{
				"name": 'Semen',
				"id": 1,
				"uniqueUrlName": null,
				"photos": {
					"small": null,
					"large": null
				},
				"status": null,
				"followed": true
			}
		],
		pageSize: 32,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: []
	}
})

test('follow success', () => {
	const newState = usersReducer(state, followSuccess(0))
	expect(newState.users[0].followed).toBeTruthy()
	expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
	const newState = usersReducer(state, unfollowSuccess(1))
	expect(newState.users[0].followed).toBeFalsy()
	expect(newState.users[1].followed).toBeFalsy()
})

test('total user count is set', () => {
	const newState = usersReducer(state, setTotalUsersCount(33))
	expect(newState.totalUsersCount).toBe(33)
	expect(newState.currentPage).toEqual(state.currentPage)
})

test('current page is set', () => {
	const newState = usersReducer(state, setCurrentPage(10))
	expect(newState.currentPage).toBe(10)
	expect(newState.totalUsersCount).toEqual(state.totalUsersCount)
})

test("toggle following progress", () => {
	const userId = 0
	const newState = usersReducer(state, toggleFollowingProgress(true, userId))
	expect(newState.followingInProgress[0]).toBe(userId)
	expect(newState.users.filter(u => u.id === userId)).toBeTruthy()
})