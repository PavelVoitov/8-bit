import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfilePropsType, setUserProfile} from "redux/profile-reducer/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ReducerPropsType} from "redux/redux-store";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";
import s from './ProfileContainer.module.css'
import {
	getStatusAC,
	getUserProfileAC,
	savePhotoAC,
	saveProfileAC,
	updateStatusAC
} from "redux/profile-reducer/profile-sagas";


type MapStateToPropsType = {
	profile: ProfilePropsType
	status: string
	authorizedUserId: string
	isAuth: boolean
	isEditMode: boolean
}

export type ProfileContainerPropsType = MapStateToPropsType & {
	setUserProfile: (profile: ProfilePropsType) => void
	getUserProfileAC: (userId: string) => void
	getStatusAC: (status: string) => void
	updateStatusAC: (status: string) => void
	savePhotoAC: (file: File) => void
	saveProfileAC: (formData: DataFromFormDataType) => void
}

type PathParamsProps = {
	userId: string
}

type CommonPropsType = RouteComponentProps<PathParamsProps> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, {}> {

	refreshProfile() {
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = this.props.authorizedUserId
			if (!userId) {
				this.props.history.push('/login')
			}
		}
		this.props.getUserProfileAC(userId)
		this.props.getStatusAC(userId)
	}

	componentDidMount() {
			this.refreshProfile()
	}

	componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>, snapshot?: any) {
		if (this.props.match.params.userId !== prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return (<>
				<div className={s.profileContainer}>
					<Profile {...this.props}
									 isOwner={!this.props.match.params.userId}
									 profile={this.props.profile}
									 status={this.props.status}
									 updateStatus={this.props.updateStatusAC}
									 savePhoto={this.props.savePhotoAC}
									 saveProfile={this.props.saveProfileAC}
									 isEditMode={this.props.isEditMode}
					/>
				</div>
			</>
		)
	}
}


let mapStateToProps = (state: ReducerPropsType) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.id,
		isAuth: state.auth.isAuth,
		isEditMode: state.profilePage.isEditMode
	}
}

export default compose<React.ComponentType>(connect(mapStateToProps,
		{
			setUserProfile,
			getUserProfileAC,
			getStatusAC,
			updateStatusAC,
			savePhotoAC,
			saveProfileAC
		}),
	withRouter,
)(ProfileContainer)