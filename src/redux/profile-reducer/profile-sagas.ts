import {call, put, select, takeEvery} from "redux-saga/effects";
import {followAPIType, profileAPI, ProfileResponseType, SavePhotoResponseType, usersAPI} from "api/api";
import {
	ProfilePropsType,
	savePhotoSuccess,
	setEditModeSuccess,
	setStatus,
	setUserProfile
} from "redux/profile-reducer/profile-reducer";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {stopSubmit} from "redux-form";
import {ReducerPropsType} from "redux/redux-store";

//sagas
export function* getUserProfile(action: ReturnType<typeof getUserProfileAC>) {
	const data: ProfilePropsType = yield call(usersAPI.getProfile, action.userId)
	yield put(setUserProfile(data))
}

export function* saveProfile(action: ReturnType<typeof saveProfileAC>) {
	const userId: string | null = yield select((state: ReducerPropsType) => state.auth.id);
	const data: ProfileResponseType = yield call(profileAPI.saveProfile, action.formData);

	if (data.resultCode === 0 && userId) {
		yield put(getUserProfileAC(userId));
		yield put(setEditModeSuccess(false));
	} else {
		const errorMessage = data.messages[0];
		const contactsName = errorMessage.split('>')[1].split(')')[0];
		const modified = contactsName.toLowerCase();

		yield put(stopSubmit('edit-profile', {contacts: {[modified]: `Ошибка в URL: ${contactsName}`}}));
		yield put(setEditModeSuccess(true));
	}
}
export function* getStatus(action: ReturnType<typeof getStatusAC>) {
	const data: string = yield call(profileAPI.getStatus, action.status)
	yield put(setStatus(data))
}
export function* updateStatus(action: ReturnType<typeof updateStatusAC>) {
	try {
		const data: followAPIType = yield call(profileAPI.updateStatus, action.status)
		if (data.resultCode === 0) {
			yield put(setStatus(action.status))
		}
	} catch (error) {
		console.log(error)
	}
}
export function* savePhotoSaga(action: ReturnType<typeof savePhotoAC>) {
	const data: SavePhotoResponseType = yield call(profileAPI.savePhoto, action.file)
	if (data.resultCode === 0) {
		yield put(savePhotoSuccess(data.data.photos))
	}
}

//sagas-action
export const getUserProfileAC = (userId: string) => ({
	type: "profile/GET-USER-PROFILE",
	userId
})
export const saveProfileAC = (formData: DataFromFormDataType) => ({
	type: "profile/SAVE-PROFILE",
	formData
})
export const getStatusAC = (status: string) => ({
	type: "profile/GET-STATUS",
	status
})
export const updateStatusAC = (status: string) => ({
	type: "profile/UPDATE-STATUS",
	status
})
export const savePhotoAC = (file: File) => ({
	type: "profile/SAVE-PHOTO",
	file
})


export function* profileWatcherSagas() {
	yield takeEvery("profile/GET-USER-PROFILE", getUserProfile)
	yield takeEvery("profile/SAVE-PROFILE", saveProfile)
	yield takeEvery("profile/GET-STATUS", getStatus)
	yield takeEvery("profile/UPDATE-STATUS", updateStatus)
	yield takeEvery("profile/SAVE-PHOTO", savePhotoSaga)
}