import {call, put, select} from "redux-saga/effects";
import {profileAPI, usersAPI} from "api/api";
import {
	getStatus,
	getStatusAC,
	getUserProfile,
	getUserProfileAC,
	saveProfile,
	saveProfileAC,
	updateStatus,
	updateStatusAC
} from "redux/profile-reducer/profile-sagas";
import {ProfilePropsType, setEditModeSuccess, setStatus, setUserProfile} from "redux/profile-reducer/profile-reducer";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {expectSaga} from "redux-saga-test-plan";
import {throwError} from "redux-saga-test-plan/providers";

let userProfile: ProfilePropsType
let userId: string
let status: string
let errorResponse: any
let dataFromForm: DataFromFormDataType
let mockState: MockStateType;
type MockStateType = {
	auth: {
		id: string
	}
}

beforeEach(() => {
	mockState = {
		auth: {
			id: '1'
		}
	}
	dataFromForm = {
		fullName: '',
		lookingForAJob: true,
		lookingForAJobDescription: '',
		aboutMe: '',
		github: '',
		vk: '',
		facebook: '',
		instagram: '',
		twitter: '',
		website: '',
		youtube: '',
		mainLink: '',
	}
	errorResponse = {
		resultCode: 1,
		messages: ['Some error message'],
	};
	status = 'status';
	userId = "1";
	userProfile = {
		userId: 1,
		lookingForAJob: true,
		lookingForAJobDescription: "frontend",
		fullName: "Peter",
		aboutMe: "Developer",
		contacts: {
			github: 'git',
			facebook: '',
			instagram: '',
			mainLink: '',
			twitter: '',
			website: '',
			youtube: '',
			vk: ''
		},
		photos: {
			small: 'small.png',
			large: 'large.png',
		},
	}

})

test('getUserProfile', () => {
	const gen = getUserProfile(getUserProfileAC(userId))
	expect(gen.next().value).toEqual(call(usersAPI.getProfile, userId))
	expect(gen.next(userProfile).value).toEqual(put(setUserProfile(userProfile)))
})
test('getStatus', () => {
	const gen = getStatus(getStatusAC(status))
	expect(gen.next().value).toEqual(call(profileAPI.getStatus, status))
	expect(gen.next(status).value).toEqual(put(setStatus(status)))
})
test('updateStatus success', () => {
	const gen = updateStatus(updateStatusAC(status))
	expect(gen.next().value).toEqual(call(profileAPI.updateStatus, status))
	expect(gen.next({resultCode: 0, messages: ['message'], data: status}).value).toEqual(put(setStatus(status)))
})
test('updateStatus not success', () => {
	const gen = updateStatus(updateStatusAC(status))
	expect(gen.next().value).toEqual(call(profileAPI.updateStatus, status))
	errorResponse.resultCode = 1
	if (errorResponse.resultCode === 1) {
		expect(throwError()).toBeTruthy()
	}
})
test('should handle saveProfile successfully', () => {
	const action = saveProfileAC(dataFromForm)

	return expectSaga(saveProfile, action)
		.withState({ auth: { id: '1' } })
		.provide([
			[select((state) => state.auth.id), '1'],
			[call(profileAPI.saveProfile, action.formData), { resultCode: 0 }],
		])
		.put(getUserProfileAC('1'))
		.put(setEditModeSuccess(false))
		.run();
})

