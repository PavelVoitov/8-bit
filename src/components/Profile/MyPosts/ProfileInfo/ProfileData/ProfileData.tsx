import {ProfileStatusWithHooks} from "components/Profile/MyPosts/ProfileInfo/ProfileStatus/ProfileStatusWithHooks";
import React from "react";
import {ProfilePropsType} from "redux/profile-reducer/profile-reducer";
import s from './ProfileData.module.css'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

type Props = {
	contactsObj: JSX.Element[]
	profile: ProfilePropsType
	updateStatus: (status: string) => void
	status: string
	isOwner: boolean
	goToEditMode: () => void
}

export const ProfileData = ({contactsObj, profile, updateStatus, status, isOwner, goToEditMode}: Props) => {
	return (
		<div>
			<div className={s.nameBlock}>
				<div><h2>{profile.fullName}</h2></div>
				{isOwner
					? <SettingsApplicationsIcon
						onClick={goToEditMode}
						className={s.settingsApplicationsIcon}
						data-title={'edit profile data'}
					></SettingsApplicationsIcon>
					: ''}
			</div>
			<ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
			<div className={s.profileDataBlock}>
				<div>
					<b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}
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