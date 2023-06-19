import {followSuccess, usersReducer, UsersType} from "redux/users-reducer";

test("", () => {
	const state: UsersType = {
		users: [{
			"name": "Petr",
			"id": 0,
			"uniqueUrlName": null,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": true
		}, {
			"name": "Semen",
			"id": 1,
			"uniqueUrlName": null,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
		}],
		pageSize: 32,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: false,
		followingInProgress: []
	}

	const newState = usersReducer(state, followSuccess(1))

	expect(newState.users[1].followed).toBe(true)
})