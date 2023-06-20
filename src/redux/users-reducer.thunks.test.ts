import {follow, followSuccess, toggleFollowingProgress, unfollow, unfollowSuccess} from "redux/users-reducer";
import {followAPIType, ResultCodeEnum, usersAPI} from "api/api";

jest.mock("api/api")

const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn()

const result: followAPIType = {
	resultCode: ResultCodeEnum.Success,
	messages: [],
	data: {}
}

beforeEach(() => {
	dispatchMock.mockClear()
	userAPIMock.followUser.mockClear()
	userAPIMock.unfollowUser.mockClear()
})

test("success follow thunk", async () => {
	userAPIMock.followUser.mockReturnValue(Promise.resolve(result))
	const thunk = follow(1)
	const dispatchMock = jest.fn()

	await thunk(dispatchMock)

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 1))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, followSuccess(1))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1))
})

test("success unfollow thunk", async () => {
	userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result))
	const thunk = unfollow(1)


	await thunk(dispatchMock)

	expect(dispatchMock).toBeCalledTimes(3)
	expect(dispatchMock).toHaveBeenNthCalledWith(1, toggleFollowingProgress(true, 1))
	expect(dispatchMock).toHaveBeenNthCalledWith(2, unfollowSuccess(1))
	expect(dispatchMock).toHaveBeenNthCalledWith(3, toggleFollowingProgress(false, 1))
})