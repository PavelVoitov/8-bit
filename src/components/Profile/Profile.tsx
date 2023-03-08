import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "redux/profile-reducer";

type ProfileType = {
	profile: ProfilePropsType
	status: string
	updateStatus: (status: string) => void
	savePhoto: (file: File) => void
  isOwner: boolean
}


export const Profile = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileType) => {

	return (
		<div>
			<ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto}/>
			<MyPostsContainer/>
		</div>
	)
}