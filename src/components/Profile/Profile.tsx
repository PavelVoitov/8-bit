import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "redux/profile-reducer";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";

type ProfileType = {
	profile: ProfilePropsType
	status: string
	updateStatus: (status: string) => void
	savePhoto: (file: File) => void
	isOwner: boolean
	saveProfile: (formData: DataFromFormDataType) => void
	isEditMode: boolean
}


export const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, isEditMode}: ProfileType) => {

	return (
		<div>
			<ProfileInfo
				profile={profile}
				status={status}
				updateStatus={updateStatus}
				isOwner={isOwner}
				savePhoto={savePhoto}
				saveProfile={saveProfile}
				isEditMode={isEditMode}
			/>
			<MyPostsContainer/>
		</div>
	)
}