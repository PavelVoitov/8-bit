import {ProfileStatusWithHooks} from "components/Profile/MyPosts/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import React from "react";
import {ProfilePropsType} from "redux/profile-reducer";

type Props = {
	contactsObj:  JSX.Element[]
	profile: ProfilePropsType
	updateStatus: (status: string) => void
	status: string
	isOwner: boolean
	goToEditMode: () => void
}

export const ProfileData = ({contactsObj, profile, updateStatus, status, isOwner, goToEditMode}: Props) => {
	return (
		<div>
			{isOwner ? <div><button onClick={goToEditMode}>edit</button></div> : ''}
			<h2>{profile.fullName}</h2>
			<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
			<div>
				<div>
					<b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
				</div>
				{profile.lookingForAJob ? <div>
					<b>My professional skills:</b> {profile.lookingForAJobDescription}
				</div> : ''
				}
				{profile.aboutMe ? <div>
					<b>About me:</b> {profile.aboutMe}
				</div> : ''}
				<h3>Contacts:</h3>
				{contactsObj}
			</div>
		</div>
	)
}