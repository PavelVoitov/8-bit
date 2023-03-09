import React from "react";
import {Input, Textarea} from "components/common/FormsControls/FormsControls";
import {required} from "utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ProfilePropsType} from "redux/profile-reducer";
import s from "components/common/FormsControls/FormControls.module.css";


export type DataFromFormDataType = {
	fullName: string
	lookingForAJob: boolean
	lookingForAJobDescription: string
	aboutMe: string
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

type ProfileDataFormType = {
	onSubmit: (formData: DataFromFormDataType) => void
	profile: ProfilePropsType
}

const ProfileDataForm: React.FC<InjectedFormProps<DataFromFormDataType, ProfileDataFormType>
	& ProfileDataFormType> = (
	{
		handleSubmit,
		error,
		profile
	}) => {
	return (
		<form onSubmit={handleSubmit}>
			<div style={{marginBottom: 20, width: 250}}>
				<button>save</button>
				{error &&
            <div className={s.formSummaryError}>
							{error}
            </div>}
			</div>
			<div>
				<b>Full name:</b>
				<Field placeholder={'Full name'}
							 component={Input}
							 name={'fullName'}
							 validate={[required]}
				/>
			</div>
			<div>
				<div style={{display: "flex", marginBottom: 20}}>
					<b>Looking for a job:</b>
					<Field
						type="checkbox"
						placeholder={'Looking for a job'}
						component={Input}
						name={'lookingForAJob'}
						style={{width: 30}}
					/>
				</div>
				<div>
					<b>My professional skills:</b>
					<Field
						placeholder={'My professional skills'}
						component={Textarea}
						name={'lookingForAJobDescription'}
						validate={[required]}
					/>
				</div>
				<div>
					<b>About me:</b>
					<Field
						placeholder={'About Me'}
						component={Textarea}
						name={'aboutMe'}
						validate={[required]}
					/>
				</div>
				<h3>Contacts:</h3>
				{Object.keys(profile.contacts).map(key => {
				return <div key={key}>
					<b>{key}:</b>
					<Field
						placeholder={key}
						component={Input}
						name={'contacts.' + key}
					/>
				</div>
			})}
			</div>
		</form>
	)
}

export const ProfileDataReduxForm = reduxForm<DataFromFormDataType, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)