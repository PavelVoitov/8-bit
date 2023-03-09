import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "api/api";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {AppThunk} from "redux/redux-store";
import {stopSubmit} from "redux-form";

export type ContactsType = {
	"github": string
	"vk": string
	"facebook": string
	"instagram": string
	"twitter": string
	"website": string
	"youtube": string
	"mainLink": string
}

export type ProfilePropsType = {
	"userId": number
	"lookingForAJob": boolean
	"lookingForAJobDescription": string
	"fullName": string
	"aboutMe": string
	"contacts": ContactsType
	"photos": {
		"small": string
		"large": string
	}
}

export type PostType = {
	id: number
	message: string
	likesCount: number
}

export type ProfilePagePropsType = {
	profile: ProfilePropsType
	posts: Array<PostType>
	status: string
	isEditMode: boolean
}

const initialState: ProfilePagePropsType = {
	posts: [
		{id: 1, message: 'Hello!', likesCount: 2},
		{id: 2, message: 'How are you?', likesCount: 17},
	],
	profile: {
		"userId": 0,
		"lookingForAJob": false,
		"lookingForAJobDescription": '',
		"aboutMe": '',
		"fullName": '',
		"contacts": {
			"github": '',
			"vk": '',
			"facebook": '',
			"instagram": '',
			"twitter": '',
			"website": '',
			"youtube": '',
			"mainLink": '',
		},
		"photos": {
			"small": '',
			"large": ''
		}
	},
	status: '',
	isEditMode: false
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
type AddPostAT = ReturnType<typeof addPostAC>
type SetStatus = ReturnType<typeof setStatus>
type DeletePost = ReturnType<typeof deletePost>
type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>
type SetEditModeSuccessAT = ReturnType<typeof setEditModeSuccess>

export type ProfileActionsTypes =
	| SetUserProfileAT
	| AddPostAT
	| SetStatus
	| DeletePost
	| SavePhotoSuccess
	| SetEditModeSuccessAT

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ProfileActionsTypes): ProfilePagePropsType => {

	switch (action.type) {
		case "profile/ADD-POST":
			const newPost: PostType = {
				id: Math.random() * 100,
				message: action.newPost,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost]
			}
		case "profile/SET-USER-PROFILE":
			return {
				...state,
				profile: action.profile
			}
		case "profile/SET-STATUS":
			return {
				...state,
				status: action.status
			}
		case "profile/DELETE-POST":
			return {
				...state,
				posts: state.posts.filter(p => p.id !== action.postId)
			}
		case "profile/SAVE-PHOTO":
			return {
				...state,
				profile: {...state.profile, photos: action.photos},
			}
		case "profile/SET-EDIT-MODE":
			return {
				...state,
				isEditMode: action.isEditMode
			}
		default:
			return state;
	}
}

//actions
export const addPostAC = (newPost: string) => (
	{
		type: "profile/ADD-POST",
		newPost: newPost
	} as const
)
export const setStatus = (status: string) => (
	{
		type: "profile/SET-STATUS",
		status
	} as const
)
export const setUserProfile = (profile: ProfilePropsType) => ({
	type: "profile/SET-USER-PROFILE",
	profile
} as const)
export const deletePost = (postId: number) => ({
	type: "profile/DELETE-POST",
	postId
} as const)
export const savePhotoSuccess = (photos: { small: string; large: string; }) => ({
	type: "profile/SAVE-PHOTO",
	photos
} as const)
export const setEditModeSuccess = (isEditMode: boolean) => ({
	type: "profile/SET-EDIT-MODE",
	isEditMode
} as const)


//thunks
export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
	const data = await usersAPI.getProfile(userId)
	dispatch(setUserProfile(data))
}
export const getStatus = (status: string) => async (dispatch: Dispatch) => {
	const data = await profileAPI.getStatus(status)
	dispatch(setStatus(data.data))
}
export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
	const data = await profileAPI.updateStatus(status)
	if (data.data.resultCode === 0) {
		dispatch(setStatus(status))
	}
}
export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
	const data = await profileAPI.savePhoto(file)
	if (data.data.resultCode === 0) {
		dispatch(savePhotoSuccess(data.data.data.photos))
	}
}
export const saveProfile = (formData: DataFromFormDataType): AppThunk => async (dispatch, getState) => {
	const userId = getState().auth.id
	const data = await profileAPI.saveProfile(formData)
	if (data.resultCode === 0 && userId) {
		await dispatch(getUserProfile(userId))
		dispatch(setEditModeSuccess(false))
	} else {
		const errorMessage = data.messages[0]
		const contactsName = errorMessage.split('>')[1].split(')')[0];
		const modified = contactsName.toLowerCase();
		dispatch(stopSubmit('edit-profile', {"contacts": {[modified]: "Ошибка в URL: " + contactsName}}))
		dispatch(setEditModeSuccess(true))

	}
}
