import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
	getStatus,
	getUserProfile,
	ProfilePropsType,
	savePhoto,
	setUserProfile,
	updateStatus
} from "redux/profile-reducer";

import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ReducerPropsType} from "redux/redux-store";


type MapStateToPropsType = {
	profile: ProfilePropsType
	status: string
	authorizedUserId: string
	isAuth: boolean
}

export type ProfileContainerPropsType = MapStateToPropsType & {
	setUserProfile: (profile: ProfilePropsType) => void
	getUserProfile: (userId: string) => void
	getStatus: (status: string) => void
	updateStatus: (status: string) => void
	savePhoto: (file: File) => void
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
		this.props.getUserProfile(userId)
		this.props.getStatus(userId)
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
				<div>
					<Profile {...this.props}
									 isOwner={!this.props.match.params.userId}
									 profile={this.props.profile}
									 status={this.props.status}
									 updateStatus={this.props.updateStatus}
									 savePhoto={this.props.savePhoto}
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
		isAuth: state.auth.isAuth
	}
}

export default compose<React.ComponentType>(connect(mapStateToProps,
		{
			setUserProfile,
			getUserProfile,
			getStatus,
			updateStatus,
			savePhoto
		}),
	withRouter,
)(ProfileContainer)