import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "api/api";

export type ProfilePropsType = {
	"userId": number
	"lookingForAJob": boolean
	"lookingForAJobDescription": string
	"fullName": string
	"contacts": {
		"github": string
		"vk": string
		"facebook": string
		"instagram": string
		"twitter": string
		"website": string
		"youtube": string
		"mainLink": string
	}
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
		"fullName": '',
		"contacts": {
			"github": '',
			"vk": '',
			"facebook": '',
			"instagram":'',
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
	status: ''
}

type SetUserProfileAT = ReturnType<typeof setUserProfile>
type AddPostAT = ReturnType<typeof addPostAC>
type SetStatus = ReturnType<typeof setStatus>
type DeletePost = ReturnType<typeof deletePost>
type SavePhotoSuccess = ReturnType<typeof savePhotoSuccess>

export type ProfileActionsTypes = SetUserProfileAT | AddPostAT | SetStatus | DeletePost | SavePhotoSuccess

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
			console.log(action.photos)
			return {
				...state,
				profile: {...state.profile, photos: action.photos},
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
