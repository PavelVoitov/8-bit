import React, {ChangeEvent} from "react";
import c from './ProfileInfo.module.css';
import {ProfilePropsType} from "redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./profileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/photosNull.png";

type ProfileInfoProps = {
	profile: ProfilePropsType
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: File) => void
}


export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoProps) => {
	if (profile === null) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			savePhoto(e.target.files[0])
		}
	}


	return (
		<div>
			<div className={c.description}>
				<img className={c.avatar} src={profile.photos?.large || userPhoto} alt={'your avatar'}/>
				{isOwner ? <input type="file" onChange={onMainPhotoSelected}/> : ''}
				<p>{profile.fullName}</p>
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
				<h2>Contacts:</h2>
				<ul>
					<li>{profile.contacts.vk}</li>
					<li>{profile.contacts.facebook}</li>
					<li>{profile.contacts.twitter}</li>
					<li>{profile.contacts.instagram}</li>
				</ul>
			</div>
		</div>
	)
}