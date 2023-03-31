import React, {ChangeEvent, useLayoutEffect, useState} from "react";
import c from './ProfileInfo.module.css';
import {ContactsType, ProfilePropsType, setEditModeSuccess} from "redux/profile-reducer";
import {Preloader} from "../../../common/Preloader/Preloader";
import userPhoto from "../../../../assets/images/photosNull.png";
import {Contact} from "components/Profile/MyPosts/ProfileInfo/Contact/Contact";
import {ProfileData} from "components/Profile/MyPosts/ProfileInfo/ProfileData/ProfileData";
import {
	DataFromFormDataType,
	ProfileDataReduxForm
} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";
import {useDispatch} from "react-redux";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {IconButton} from "@mui/material";

type ProfileInfoProps = {
	profile: ProfilePropsType
	status: string
	updateStatus: (status: string) => void
	isOwner: boolean
	savePhoto: (file: File) => void
	saveProfile: (formData: DataFromFormDataType) => void
	isEditMode: boolean
}


export const ProfileInfo = ({
															profile,
															status,
															updateStatus,
															isOwner,
															savePhoto,
															saveProfile,
															isEditMode
														}: ProfileInfoProps) => {
	const [editMode, setEditMode] = useState<boolean>(false)
	const dispatch = useDispatch()

	useLayoutEffect( () => {
		isEditMode ? setEditMode(true) : setEditMode(false)
	}, [isEditMode])

	if (profile === null) {
		return <Preloader/>
	}

	const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			savePhoto(e.target.files[0])
		}
	}

	const contacts: ContactsType = profile.contacts
	const contactsObj = Object.keys(contacts).map(key => {
		return <Contact key={key} contactTitle={key} contactValue={contacts[key as keyof ContactsType]}/>
	})

	const onSubmit = async (formData: DataFromFormDataType) => {
		 saveProfile(formData)
	}

	const goToEditMode = () => {
		setEditMode(true)
		dispatch(setEditModeSuccess(true))
	}

	return (
		<div>
			<div className={c.description}>
				<div className={c.photoEdit}>
					<div>
						<img className={c.avatar} src={profile.photos?.large || userPhoto} alt={'your avatar'}/>
					</div>
					<div className={c.iconEditPhoto}>
						{isOwner ?
							<IconButton color="inherit" aria-label="upload picture" component="label">
								<input hidden accept="image/*" type="file" onChange={onMainPhotoSelected}/>
								<AddAPhotoIcon />
							</IconButton>
							: ''}
					</div>
				</div>
				<div>
					{editMode
						? <ProfileDataReduxForm
							onSubmit={onSubmit}
							initialValues={profile}
							profile={profile}
						/>
						: <ProfileData
							contactsObj={contactsObj}
							profile={profile}
							updateStatus={updateStatus}
							status={status}
							isOwner={true}
							goToEditMode={goToEditMode}
						/>}
				</div>
			</div>
		</div>
	)
}